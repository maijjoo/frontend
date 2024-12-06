import React from "react";
import { PiCaretRight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const MenuBox = ({ text, hasChild, childList, link = [], onChildClick }) => {
  const navigate = useNavigate();

  // 로그아웃을 위한 임시 방편

  const handleClick = (child, index) => {
    // link가 배열이고 해당 인덱스에 link가 있으면 네비게이션
    if (Array.isArray(link) && link[index]) {
      navigate({ pathname: `./${link[index]}` }, { replace: true });
    }
    // onChildClick이 있고 child가 "로그아웃"이면 onChildClick 실행
    else if (onChildClick && child === "로그아웃") {
      onChildClick(child);
    }
    // 단일 link인 경우 (하위 메뉴가 없는 경우)
    else if (typeof link === "string") {
      navigate({ pathname: `./${link}` }, { replace: true });
    }
  };

  return (
    <div className="w-full bg-undbgsub border border-unddisabled rounded-md p-5">
      <div
        onClick={() => handleClick()}
        className={`w-full flex ${
          hasChild ? "justify-start" : "justify-between"
        }`}
      >
        <span className="text-undtextgray font-extrabold">{text}</span>
        {!hasChild && (
          <div>
            <PiCaretRight size={23} color="78716C" />
          </div>
        )}
      </div>
      {hasChild &&
        childList.map((child, index) => (
          <div
            className="w-full flex justify-between mt-2 cursor-pointer"
            key={child}
            onClick={() => handleClick(child, index)}
          >
            <span className="text-undtextdark font-bold">{child}</span>
            <PiCaretRight size={23} color="78716C" />
          </div>
        ))}
    </div>
  );
};

export default MenuBox;
