import JSConfetti from 'js-confetti';

const confetti = new JSConfetti();

export function triggerConfetti() {
  confetti.addConfetti({
    emojis: ['🦴', '🐾', '🐶', '🎉'], // Customize emojis as needed
  });
}