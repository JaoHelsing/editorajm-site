// Abre e fecha o menu "Nossos livros" (clique, toque, Esc e clique fora).
(function () {
  var botao = document.querySelector('.menu-botao');
  if (!botao) return;
  var lista = document.getElementById(botao.getAttribute('aria-controls'));
  function mostrar(abrir) {
    botao.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    lista.classList.toggle('aberto', abrir);
  }
  botao.addEventListener('click', function (e) {
    e.stopPropagation();
    mostrar(botao.getAttribute('aria-expanded') !== 'true');
  });
  lista.addEventListener('click', function (e) { if (e.target.closest('a')) mostrar(false); });
  document.addEventListener('click', function (e) { if (!lista.contains(e.target)) mostrar(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') { mostrar(false); botao.focus(); }
  });
})();
