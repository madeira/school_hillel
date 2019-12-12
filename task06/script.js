function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function(context) {
        const ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };
}

function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function (context) {
        const ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
}

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function (context) {
        const ctx = context.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

function Canvas(id) {
    this.canvas = document.getElementById(id);

    this.add = function () {
        this.canvas = document.getElementById(id);
        for(let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    }
}

const drawArea = new Canvas('canvasID');

const line1 = new Line(350, 300, 100, 400, 'gray');
const line2 = new Line(400, 350, 150, 450, 'gray');
const circle1 = new Circle(150, 100, 50, 'rgba(207, 230, 255, .5)');
const circle2 = new Circle(200, 200, 100, 'rgba(207, 230, 255, .5)');
const rect1 = new Rect(650, 250, 100, 200, 'rgba(206, 255, 226, .5)');
const rect2 = new Rect(700, 200, 200, 100, 'rgba(235, 205, 232, .5)');
const rect3 = new Rect(850, 250, 100, 100, 'rgba(234, 224, 84, .5)');

for (let count = 0, x1 = 0, x2 = 30; x1 < 1000; count++, x1 += 30, x2 +=30) {
    if (count % 2) drawArea.add(new Line(x1, 30, x2, 0, 'red'));
    else drawArea.add(new Line(x1, 0, x2, 30, 'red'));
}

drawArea.add(line1, line2);
drawArea.add(circle1, circle2);
drawArea.add(rect1, rect2, rect3);