function mostrarEquacao() {
  const elemento = document.getElementById("equacao");

  elemento.textContent =
    "Equação da fotossíntese: 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂";

  elemento.classList.remove("oculto");
}
