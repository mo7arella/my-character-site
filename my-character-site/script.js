document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('character');
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');

  // Зоны персонажа (координаты относительно изображения)
  const zones = [
    {
      name: 'голова',
      x1: 150, y1: 80,
      x2: 350, y2: 250,
      text: "Голова — здесь живёт мой разум... и мечты о чизкейке 🍰"
    },
    {
      name: 'ухо',
      x1: 200, y1: 180,
      x2: 250, y2: 230,
      text: "Ухо — слышу шепот ветра... и звон будильника 😴"
    },
    {
      name: 'рука',
      x1: 350, y1: 220,
      x2: 450, y2: 300,
      text: "Рука — готова обнять друга... или взять последний кусочек пиццы 🍕"
    },
    {
      name: 'нога',
      x1: 480, y1: 350,
      x2: 580, y2: 450,
      text: "Нога — шагает к приключениям... или просто к холодильнику 🧃"
    },
    {
      name: 'туловище',
      x1: 250, y1: 250,
      x2: 450, y2: 400,
      text: "Туловище — центр моего мира. Здесь всё: сердце, желудок и мечта о кофе ☕"
    }
  ];

  img.addEventListener('click', function(e) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left; // координата X внутри картинки
    const y = e.clientY - rect.top;  // координата Y внутри картинки

    let foundZone = null;

    for (let zone of zones) {
      if (x >= zone.x1 && x <= zone.x2 && y >= zone.y1 && y <= zone.y2) {
        foundZone = zone;
        break;
      }
    }

    if (foundZone) {
      popupText.textContent = foundZone.text;
      popup.style.display = 'block';
      popup.style.left = (e.clientX + 10) + 'px';
      popup.style.top = (e.clientY + 10) + 'px';
    } else {
      popup.style.display = 'none';
    }
  });

  // Закрытие окна при клике вне его
  document.addEventListener('click', function(e) {
    if (!popup.contains(e.target) && e.target !== img) {
      popup.style.display = 'none';
    }
  });
});
