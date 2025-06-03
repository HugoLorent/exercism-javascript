// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 *
 * @param {number} width
 * @param {number} height
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 *
 * @param {number} newWidth
 * @param {number} newHeight
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 *
 * @param {number} x
 * @param {number} y
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 *
 * @param {number} newX
 * @param {number} newY
 */
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   *
   * @param {Size} newSize
   */
  resize(newSize) {
    let newWidth = newSize.width;
    let newHeight = newSize.height;

    if (newSize.width < 1) {
      newWidth = 1;
    }

    if (newSize.height < 1) {
      newHeight = 1;
    }

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    if (newWidth > maxWidth) {
      newWidth = maxWidth;
    }

    if (newHeight > maxHeight) {
      newHeight = maxHeight;
    }

    this.size.resize(newWidth, newHeight);
  }

  /**
   *
   * @param {Position} newPosition
   */
  move(newPosition) {
    let newX = newPosition.x;
    let newY = newPosition.y;

    if (newPosition.x < 0) {
      newX = 0;
    }

    if (newPosition.y < 0) {
      newY = 0;
    }

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    if (newX > maxX) {
      newX = maxX;
    }

    if (newY > maxY) {
      newY = maxY;
    }

    this.position.move(newX, newY);
  }
}

/**
 *
 * @param {ProgramWindow} programWindow
 * @returns the programWindow instance passed in
 */
export function changeWindow(programWindow) {
  programWindow.size.resize(400, 300);
  programWindow.position.move(100, 150);
  return programWindow;
}
