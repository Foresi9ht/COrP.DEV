(function () {
  var services = ['Лендинг / визитка','Сайт под ключ','CRM-интеграция','Телеграм-бот','Backend и автоматизация','Другое'];
  services[3] = 'Telegram-бот';
  var sel = { service: 0, budget: 3 };
  var opts = document.querySelectorAll('.opt');
  function paint() {
    opts.forEach(function (b) {
      var on = sel[b.dataset.group] === Number(b.dataset.i);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.style.background = on ? '#ffffff' : '#000000';
      b.style.color = on ? '#0a0a0a' : '#f2f2f2';
    });
  }
  opts.forEach(function (b) {
    b.addEventListener('click', function () { sel[b.dataset.group] = Number(b.dataset.i); paint(); });
  });
  paint();
  var form = document.getElementById('form-view');
  var done = document.getElementById('sent-view');
  document.getElementById('send').addEventListener('click', function () {
    // TODO: здесь отправка заявки на ваш backend (fetch POST), CRM и Telegram.
    document.getElementById('chosen').textContent = services[sel.service];
    form.hidden = true; form.style.display = 'none';
    done.hidden = false; done.style.display = 'flex';
  });
  document.getElementById('again').addEventListener('click', function () {
    done.hidden = true; done.style.display = 'none';
    form.hidden = false; form.style.display = 'flex';
  });
})();
