import { useEffect, useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

// 책 제목, 작가명, ISBN으로 검색
const SearchBar = ({
  onSearchSubmit,
  searchHistory = null,
  placeholder,
  onChange,
}) => {
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태 관리

  useEffect(() => {
    if (searchHistory) {
      setSearchKeyword(searchHistory);
    }
  }, [searchHistory]);

  // 검색 실행 처리
  const handleSearch = () => {
    if (searchKeyword) {
      onSearchSubmit(searchKeyword); // 상위 컴포넌트로 검색 실행
    }
  };

  // 엔터키 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // 엔터키 입력 시 검색 실행
    }
  };

  return (
    <div className="w-full flex h-10 justify-center items-center bg-undbgmain">
      <div
        className="w-full h-full px-2 flex items-center justify-between border
    border-unddisabled rounded-full bg-white gap-2.5"
      >
        {/* 검색 버튼 */}
        <button onClick={onSearchSubmit && handleSearch}>
          <PiMagnifyingGlass size={28} color="#78716C" />
        </button>
        {/* 검색어 입력 */}
        <input
          type="search"
          placeholder={placeholder}
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
            onChange && onChange(e.target.value);
          }} // 입력값 상태 업데이트
          onKeyDown={onSearchSubmit && handleKeyDown} // 엔터키 이벤트 처리
          className="text-undtextdark text-und16 w-full"
        />
        {/* 바코드 버튼 */}
      </div>
    </div>
  );
};

export default SearchBar;