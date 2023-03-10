import React from "react";
import "./TwoArt.css";

export default function TwoArt() {
  return (
    <div className="twoArt">
      <div className="Secondcont">
        <div className="flex">
          <div className="text-cont">
            <span className="text-cont-title">Товары</span>
            <p className="text-cont-p">
              Диски и колодки Brannor это высокотехнологичный и максимально
              эффективный продукт
            </p>
            <button>
              увеличение плавности торможения без потери эффективности
            </button>
            <br />
            <button>увеличенный срок службы</button>
            <button>увеличинная эффективность работы</button> <br />
            <button>
              стабильные характеристики в широком диапазоне температур
            </button>
          </div>
          <div className="photo-cont"></div>
          <div className="red-cont"></div>
        </div>
      </div>
    </div>
  );
}
