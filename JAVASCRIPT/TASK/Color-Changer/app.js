let simple_color = [
    "#0CF2BF",
    "#E2D322",
    "#31A8C2",
    "#D9F2F1",
    "#986BCA",
    "#839C1A",
    "#A6906F"
  ];


  let btn_generate_color = document.getElementById("generate_color");
  let color_code_generator = document.getElementById("color_code_generated");

  btn_generate_color.addEventListener("click", (e) => {
    let random_color_generated = Math.floor(Math.random() * simple_color.length);
    document.body.style.backgroundColor =simple_color[random_color_generated];
    color_code_generator.innerHTML = simple_color[random_color_generated]
  });