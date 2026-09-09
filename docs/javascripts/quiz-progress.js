(() => {
	function enhanceQuiz() {
		const content = document.querySelector(".md-content");
		const heading = content?.querySelector("h1");
		const answers = content ? [...content.querySelectorAll("details.success")] : [];

		if (!heading || !heading.textContent.trim().toLowerCase().startsWith("quiz") || answers.length < 3) {
			return;
		}

		if (content.querySelector(".quiz-progress")) {
			return;
		}

		const storageKey = `school-library:quiz:${window.location.pathname}`;
		let completed = new Set();

		try {
			completed = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
		} catch {
			localStorage.removeItem(storageKey);
		}

		const panel = document.createElement("section");
		panel.className = "quiz-progress";
		panel.setAttribute("aria-label", "Progression du quiz");
		panel.innerHTML = `
			<div class="quiz-progress__header">
				<div>
					<span class="quiz-progress__eyebrow">Défi quiz</span>
					<strong class="quiz-progress__status"></strong>
				</div>
				<div class="quiz-progress__score" aria-live="polite"></div>
			</div>
			<div class="quiz-progress__track" role="progressbar" aria-valuemin="0" aria-valuemax="${answers.length}">
				<span class="quiz-progress__bar"></span>
			</div>
			<div class="quiz-progress__footer">
				<span>Ouvre une correction pour gagner 10 XP.</span>
				<button class="quiz-progress__reset" type="button">Recommencer</button>
			</div>`;
		heading.insertAdjacentElement("afterend", panel);

		const status = panel.querySelector(".quiz-progress__status");
		const score = panel.querySelector(".quiz-progress__score");
		const track = panel.querySelector(".quiz-progress__track");
		const bar = panel.querySelector(".quiz-progress__bar");

		function updateProgress() {
			const count = completed.size;
			const ratio = count / answers.length;
			let level = "Échauffement";

			if (ratio === 1) {
				level = "Maîtrisé";
			} else if (ratio >= 0.6) {
				level = "Solide";
			} else if (ratio >= 0.25) {
				level = "En route";
			}

			status.textContent = `${count}/${answers.length} réponses · ${level}`;
			score.textContent = `${count * 10} XP`;
			track.setAttribute("aria-valuenow", String(count));
			bar.style.width = `${ratio * 100}%`;
			panel.classList.toggle("quiz-progress--complete", ratio === 1);
			localStorage.setItem(storageKey, JSON.stringify([...completed]));
		}

		answers.forEach((answer, index) => {
			if (completed.has(index)) {
				answer.classList.add("quiz-answer--complete");
			}

			answer.addEventListener("toggle", () => {
				if (!answer.open || completed.has(index)) {
					return;
				}

				completed.add(index);
				answer.classList.add("quiz-answer--complete");
				updateProgress();
			});
		});

		panel.querySelector(".quiz-progress__reset").addEventListener("click", () => {
			completed.clear();
			answers.forEach((answer) => {
				answer.open = false;
				answer.classList.remove("quiz-answer--complete");
			});
			updateProgress();
		});

		updateProgress();
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", enhanceQuiz);
	} else {
		enhanceQuiz();
	}

	if (typeof document$ !== "undefined") {
		document$.subscribe(enhanceQuiz);
	}
})();
