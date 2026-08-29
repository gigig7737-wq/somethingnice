const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const musicBtn = $('#musicBtn');
musicBtn?.addEventListener('click', () => {
  musicBtn.classList.toggle('playing');
  musicBtn.textContent = musicBtn.classList.contains('playing') ? '♫' : '♪';
});

const birthdayDate = new Date('2026-08-29T18:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'You have a way of making ordinary moments memorable.',
  'You can make people laugh when they least expect it.',
  'You have your own unmistakable way of being you.',
  'You are someone worth remembering.',
  'You have a surprisingly good sense of humor.',
  'You make random conversations more interesting.',
  'You know how to turn a boring moment into a story.',
  'You have a personality that is hard to forget.',
  'You can be chaotic, but somehow it works.',
  'You are genuinely easy to talk to.',
  'You have a way of making people feel comfortable.',
  'You notice little things that other people miss.',
  'You have your own kind of charm.',
  'You make memories without even trying.',
  'You are fun to annoy. 😂',
  'You have a laugh that is impossible to mistake.',
  'You bring your own energy wherever you go.',
  'You are surprisingly good at making people smile.',
  'You have been part of some really good memories.',
  'You are someone I am glad I got to know.',
  'You can make even random chats worth remembering.',
  'You have a way of making people feel heard.',
  'You are stronger than you probably give yourself credit for.',
  'You have grown in ways you might not even notice.',
  'You have a good heart underneath all the nonsense. 😂',
  'You know how to make a moment feel less awkward.',
  'You can be serious when it actually matters.',
  'You have a genuinely memorable personality.',
  'You make inside jokes way too easy to create.',
  'You are capable of making people laugh at the worst times.',
  'You have a talent for creating stories out of nothing.',
  'You are not boring. That is definitely worth mentioning.',
  'You have your own way of seeing things.',
  'You can make a simple day surprisingly fun.',
  'You have taught me things without realizing it.',
  'You have been part of a chapter I will remember.',
  'You have a way of making conversations go on forever.',
  'You are someone I can still wish good things for.',
  'You deserve people who genuinely appreciate you.',
  'You deserve more good days than bad ones.',
  'You deserve moments that make you genuinely happy.',
  'You deserve friends who show up for you.',
  'You deserve to be proud of how far you have come.',
  'You deserve a year full of good surprises.',
  'You deserve to laugh until your stomach hurts.',
  'You deserve peaceful nights and good mornings.',
  'You deserve opportunities that make you excited.',
  'You deserve people who see the good in you.',
  'You deserve happiness without having to chase it.',
  'You have a lot more potential than you realize.',
  'You are capable of doing difficult things.',
  'You have survived days you once thought would break you.',
  'You keep moving forward, even when things get complicated.',
  'You have grown from the things life has thrown at you.',
  'You are allowed to be proud of yourself.',
  'You are allowed to start over whenever you need to.',
  'You are allowed to change your mind and your direction.',
  'You are becoming your own person.',
  'You have plenty of good things ahead of you.',
  'You make the past worth remembering without needing to live in it.',
  'You are proof that people can change and grow.',
  'You have a future that is still being written.',
  'You can make new memories wherever life takes you.',
  'You are someone whose story is still unfolding.',
  'You have more adventures waiting for you.',
  'You can turn unexpected situations into funny stories.',
  'You have a talent for making random things memorable.',
  'You somehow make chaos entertaining.',
  'You have definitely provided some unforgettable moments.',
  'You are responsible for more than a few random laughs.',
  'You have made some ordinary days surprisingly good.',
  'You are one of those people who leaves memories behind.',
  'You have a way of making certain moments impossible to forget.',
  'You can be wonderfully ridiculous sometimes.',
  'You have your moments of absolute genius. 😂',
  'You have your moments of absolute nonsense too. 😂',
  'You are allowed to be both serious and completely silly.',
  'You make a pretty good friend.',
  'You are someone I can genuinely wish the best for.',
  'You are worth celebrating today.',
  'You are worth appreciating even on ordinary days.',
  'You are worth more than your worst moments.',
  'You are more than the mistakes you have made.',
  'You are more than what other people think of you.',
  'You have qualities that people remember.',
  'You have a personality that makes you, you.',
  'You have people who are grateful you exist.',
  'You have made a difference in someone else’s life.',
  'You have memories that will always mean something.',
  'You have a place in my memories that I can appreciate.',
  'You were an important part of my story.',
  'You are now someone I am happy to call a friend.',
  'You can look back without regretting every moment.',
  'You can appreciate what happened without needing to repeat it.',
  'You can keep the good memories and keep moving forward.',
  'You have a whole new chapter waiting for you.',
  'You have another year to become even more yourself.',
  'You have another year to laugh at your own terrible decisions. 😂',
  'You have another year to make ridiculously good memories.',
  'You have another year to surprise yourself.',
  'You have another year to find things that make you happy.',
  'You have another year to grow, learn, and enjoy life.',
  'And finally... because you are Pawpaw, and that is reason enough. 🤍'
];
const reasonGrid = $('#reasonGrid');
if (reasonGrid) {
  const imageFolder = reasonGrid.dataset.imageFolder || 'assets';
  const reasonImages = Array.from({ length: 100 }, (_, index) => `${imageFolder}/${index + 1}.jpg`);

  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      const image = reasonImages[index % reasonImages.length];
      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>tap the note</p>
          </div>
          <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

const envelope = $('#envelope');
const letterText = `Dear Pawpaw,

Happy Birthday. 🤍

I didn't want to just send you the usual "Happy Birthday, have a nice day" message and leave it there. You deserve something a little more thoughtful than that.

We've been through different moments together. Some were beautiful, some were complicated, and some probably taught us things we didn't expect to learn. But when I look back, I can still appreciate the good memories and the person you were during those moments of my life.

Things between people can change. Feelings can change. Life can take us in completely different directions. And that's okay.

What matters is that I can still wish good things for you without asking for anything in return.

I hope this next chapter brings you more reasons to smile. I hope you meet people who appreciate you, find things that make you excited about life, and have moments where you stop and think, "Yeah... life is actually pretty good."

You deserve those moments.

So wherever life takes you from here, I hope you're doing okay. I hope you're happy. And I hope this birthday is the beginning of a really good year for you.

Happy Birthday, Pawpaw.

From someone who once shared a chapter of your story,
and is happy to still call you a friend. 🤍

— Hamzah`;
let hasTypedLetter = false;

envelope?.addEventListener('click', () => {
  envelope.classList.add('open');
  if (hasTypedLetter) return;

  hasTypedLetter = true;
  let index = 0;
  const typedLetter = $('#typedLetter');
  const typing = setInterval(() => {
    typedLetter.textContent += letterText[index] || '';
    index += 1;
    if (index > letterText.length) clearInterval(typing);
  }, 35);
});

const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... 🌬️';
  cutCakeBtn.textContent = 'Blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting 🔪';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'Cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice for youu 🎉';
  cutCakeBtn.textContent = 'Cake Cut 🎉';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});
