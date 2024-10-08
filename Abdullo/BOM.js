const root = document.getElementById("root");
const container = document.createElement("div");
container.className = "container";

const div1 = document.createElement("div");
div1.textContent = "Похожие товары";
div1.className = "div1";

const miniContainer = document.createElement("div");
miniContainer.className = "miniContainer";

function createProductBlock() {
  const block = document.createElement("div");
  block.className = "block";

  const mindiv1 = document.createElement("div");
  mindiv1.className = "mindiv1";

  const mindiv2 = document.createElement("div");
  mindiv2.innerHTML = `<h2 class="h2">Нож Лиса</h2>
    <div class="d1"><span>95x18</span> <span>Орех, Алюминий</span></div>
    <div class="d2">
        <div class="dd">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
        </div>
        <span>12 отзывов</span>
    </div>
    <hr class="hr">
    <div class="footer">
        <span>2 719P</span>
        <div>
            <img src="img/Весы.png" class="icons">
            <img src="img/Сердечко.png" class="icons">
        </div>
    </div>`;

  block.append(mindiv1);
  block.append(mindiv2);
  return block;
}

const container2 = document.createElement("div");
container2.className = "container";

const div2 = document.createElement("div");
div2.textContent = "Рекомендуем";
div2.className = "div1";

const miniContainer2 = document.createElement("div");
miniContainer2.className = "miniContainer";

function createProductBlock2() {
  const block = document.createElement("div");
  block.className = "block";

  const mindiv1 = document.createElement("div");
  mindiv1.className = "mindiv1";

  const mindiv2 = document.createElement("div");
  mindiv2.innerHTML = `<h2 class="h2">Нож Лиса</h2>
    <div class="d1"><span>95x18</span> <span>Орех, Алюминий</span></div>
    <div class="d2">
        <div class="dd">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
            <img src="img/Звезда.png" class="stars">
        </div>
        <span>12 отзывов</span>
    </div>
    <hr class="hr">
    <div class="footer">
        <span>2 719P</span>
        <div>
            <img src="img/Весы.png" class="icons">
            <img src="img/Сердечко.png" class="icons">
        </div>
    </div>`;

  block.append(mindiv1);
  block.append(mindiv2);
  return block;
}

container.append(div1);
miniContainer.append(createProductBlock());
miniContainer.append(createProductBlock());
miniContainer.append(createProductBlock());
miniContainer.append(createProductBlock());
container.append(miniContainer);
container.append(div2);

miniContainer2.append(createProductBlock2());
miniContainer2.append(createProductBlock2());
miniContainer2.append(createProductBlock2());
miniContainer2.append(createProductBlock2());
container2.append(miniContainer2);

root.append(container);
root.append(container2);
