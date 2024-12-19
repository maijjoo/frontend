import React, { useState } from "react";
import { PiXBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

function TermsOfUse() {
  const [buttonPosition, setButtonPosition] = useState({ x: 300, y: 30 });
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleXClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 1) {
      navigate(location.state?.from || "/settings", {
        state: {
          isModalOpen: location.state?.isModalOpen,
          checkboxStates: location.state?.checkboxStates,
          ageCheck: location.state?.ageCheck,
        },
        replace: true,
      });
      return;
    }

    // 화면 상단 영역 내에서만 랜덤 위치 계산
    const maxX = window.innerWidth - 50; // X 아이콘 크기 고려
    const maxY = 200; // 상단 200px 이내로 제한

    const newX = Math.max(20, Math.random() * maxX); // 최소 20px 여백
    const newY = Math.max(20, Math.random() * maxY); // 최소 20px 여백

    setButtonPosition({ x: newX, y: newY });
  };
  return (
    <div className="relative bg-undbgmain z-50">
      <PiXBold
        size={30}
        className="cursor-pointer absolute"
        style={{
          // position: "fixed",
          left: buttonPosition.x,
          top: buttonPosition.y,
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
        onClick={handleXClick}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8 text-start">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-8">서비스 이용약관</h1>
        </div>
        <section>
          <h2 className="text-xl font-semibold">제1조 [목적]</h2>
          <p className=" text-sm text-undtextgray leading-relaxed text-start">
            이 약관은 undefind (이하 “회사”)가 제공하는 공책(이하 “서비스”)를
            이용함에 있어 회사와 사용자 간의 권리ㆍ의무 및 책임사항을 규정함을
            목적으로 합니다. <br /> 서비스를 이용하고자 하는 자는 본 이용 약관을
            자세히 읽은 후 이용 약관에 동의하지 않을 경우, 본 이용 약관에 동의
            표시를 하거나 서비스에 등록 또는 액세스하거나 이를 이용(이하
            “이용”)하지 않아야 합니다.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제2조 [용어의 정의]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 이 약관에서
            사용하는 용어 중 본 조에서 정하지 아니한 것은 회사 사이트의 별도
            페이지 안내 및 관계 법령에서 정하는 바에 따르며, 그 외에는 일반
            상관례에 따릅니다.
            <ul>
              <li>
                1. “회사”란 재화 또는 용역(이하 “재화 등”이라 함)을 사용하여
                이용자에게 서비스를 제공할 목적으로 컴퓨터 등 정보통신설비를
                이용하여 설정한 가상의 영업장을 말하며, 아울러 “회사”가 제작,
                운영하는 모바일 어플리케이션 및 인터넷 웹사이트(이하 “사이트”)을
                운영하는 사업자의 의미로도 사용합니다.
              </li>
              <li>
                2. “서비스”란 회사가 휴대용 단말기, 개인용 컴퓨터 등
                전기통신설비를 포함한 각종 유무선 장치와 모바일 어플리케이션,
                웹사이트를 통해 이용자에게 제공하는 디지털 콘텐츠 등 제반
                서비스를 말합니다.
              </li>
              <li>
                3. “이용자”란 “사이트”에 접속하여 이 약관에 따라 “회사”가
                제공하는 “서비스”를 받는 회원 및 비회원을 말합니다.
              </li>
              <li>
                4. “회원”이란 회사와 이용계약을 체결하고 아이디(ID)를 부여 받은
                이용자로서 회사의 정보를 제공받으며 회사가 제공하는 유ㆍ무상
                서비스를 지속적으로 이용할 수 있는 자를 말합니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제3조 [약관 외 준칙]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사는 개별 서비스에 대하여 별도의 이용약관 및 운영정책 등을
                둘 수 있으며, 해당 내용이 본 약관과 상충할 경우에는 별도의
                이용약관 및 운영정책이 우선하여 적용됩니다.
              </li>
              <li>
                2. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는
                전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한
                법률 등 관계 법령 또는 상관례에 의합니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제4조 [약관의 명시와 설명 및 개정]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사는 이 약관의 내용을 회원이 쉽게 확인할 수 있도록 모바일
                어플리케이션 및 웹사이트에 게시합니다.
              </li>
              <li>
                2. 이 약관은 이용자가 회원으로 가입하면서 이 약관에 동의함으로써
                효력이 발생합니다.
              </li>
              <li>
                3. 회사는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의
                규제에 관한 법률, 전자문서 및 전자거래기본법, 전자서명법,
                정보통신망 이용촉진 및 정보보호 등에 관한 법률, 소비자보호법 등
                관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                회사가 약관을 개정할 경우에는 개정 약관 적용일 최소 7일 이전부터
                사이트 내에서 회원에게 공지합니다. 다만 회원에게 불리하게 약관
                내용을 변경하는 경우 최소 30일 이상의 유예기간을 두고
                공지합니다.
              </li>
              <li>
                4. 본 약관은 수시로 개정될 수 있으므로 회원은 서비스 내에 공지된
                약관의 최신 버전을 주기적으로 확인하여야 합니다. 본 약관이
                개정되는 경우, 회원은 추후 유료서비스를 구매할 때 새로운 조건을
                검토할 기회를 갖게 됩니다. 회원은 개정 약관 공지일로부터 해당
                약관의 효력 발생일까지 회사에게 변경 약관 적용 거부의사를 표명할
                수 있습니다. 회원이 해당 기간 내에 거부의사를 표시하지 않은 경우
                회원은 변경 약관에 동의한 것으로 봅니다. 개정 약관의 수락을
                거부하는 경우 변경 약관에 따라 제공되는 서비스는 제공되지 않고,
                회원이 이전에 구매한 유료서비스를 사용하는 데에는 회원이 수락한
                마지막 버전의 약관이 계속 적용됩니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제5조 [서비스의 제공 및 변경]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사는 이용자에게 모바일 어플리케이션과 웹사이트를 통해
                디지털 콘텐츠 및 제반 서비스를 제공합니다.
              </li>
              <li>
                2. 회사는 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의
                경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의
                내용을 변경할 수 있습니다.
              </li>
              <li>
                3. “회사”가 제공하는 서비스의 형태와 기능, 디자인 등은 필요한
                경우 변경되거나 중단될 수 있습니다. 회사는 이 경우 개별적인
                변경에 대하여 회원에게 사전 통지하지 않습니다. 다만, 회원에게
                불리한 것으로 판단되는 경우 서비스 내 게시 혹은 전자우편을
                통하여 이를 공지합니다.
              </li>
              <li>
                4. 전항의 경우 회사는 이로 인하여 회원이 입은 손해를 배상합니다.
                다만, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지
                아니합니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제6조 [광고성 정보의 수신]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사는 이용자 맞춤형 서비스 및 상품 추천, 각종 이벤트, 행사
                등의 광고성 정보를 전자우편, 스마트폰 푸시 알림 등의 방법으로
                이용자에게 제공할 수 있습니다. 다만, 이용자는 언제든지 전자우편
                등을 통하여 수신을 거절할 수 있습니다.
              </li>
              <li>
                2. 광고성 정보의 수신 동의는 거부하실 수 있으며 동의 이후라도
                이용자의 의사에 따라 동의를 철회할 수 있습니다. 개인정보보호법
                제22조 제5항에 의해 동의를 거부하더라도 회사가 제공하는 서비스
                이용이 제한되지 않습니다. 단, 할인, 이벤트 및 사용자 맞춤형
                서비스 추천 등의 광고성 정보 안내 서비스가 제한됩니다.{" "}
              </li>
              <li>
                3. 회사에서 제공하는 광고성 정보를 원하지 않을 경우 언제든지
                서비스 내부 설정 페이지를 통하여 철회를 요청하는 취지로 설정을
                변경할 수 있습니다. 또한 향후 광고성 정보 수신에 새롭게
                동의하고자 하는 경우에도 설정 페이지에서 동의할 수 있습니다.{" "}
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제7조 [서비스의 중단]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장,
                통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을
                일시적으로 중단할 수 있습니다. 이 경우 제11조(회원에 대한
                통지)에 정한 방법으로 이용자에게 통지합니다. 다만, 회사가 사전에
                통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수
                있습니다.{" "}
              </li>
              <li>
                2. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수
                있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제8조 [회원가입]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회원가입은 이용자가 약관의 내용에 대하여 동의를 하고
                회원가입신청을 한 후 회사가 이러한 신청에 대하여 승낙함으로써
                체결됩니다.
              </li>
              <li>
                2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 회원이 다음
                각호에 해당하지 않는 한 신청을 수락합니다.
                <ul className="ml-4">
                  <li>(1) 부정한 목적으로 타인의 명의를 이용한 경우</li>
                  <li>
                    (2) 허위의 정보를 기재하거나 회사가 제시하는 내용을 기재하지
                    않는 경우
                  </li>
                  <li>
                    (3) 기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이
                    있다고 판단되는 경우
                  </li>
                  <li>(4) 만 14세 미만의 아동이 회원가입 신청을 한 경우</li>
                </ul>
              </li>
              <li>
                3. 회원가입 계약의 성립시기는 회사의 승낙이 회원에게 도달한
                시점으로 합니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제9조 [회원 탈퇴 및 자격 상실 등]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을
                제한 및 정지시킬 수 있습니다.
                <ul className="ml-4">
                  <li>
                    (1) 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는
                    등 전자상거래 질서를 위협하는 경우
                  </li>
                  <li>
                    (2) 회사를 이용하여 법령 또는 이 약관이 금지하거나
                    공서양속에 반하는 행위를 하는 경우
                  </li>
                </ul>
              </li>
              <li>
                2. 회사가 회원자격을 제한ㆍ정지시킨 후, 동일한 행위가 2회 이상
                반복되거나 14일 이내에 그 사유가 시정되지 아니하는 경우 회사는
                회원자격을 상실시킬 수 있습니다.
              </li>
              <li>
                3. 회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다.
                이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 14일
                이상의 기간을 정하여 소명할 기회를 부여합니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제10조 [아이디 및 비밀번호의 관리]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 아이디(ID) 및 비밀번호에 대한 관리 책임은 회원에게 있으며,
                회원은 어떠한 경우에도 본인의 아이디(ID) 또는 비밀번호를
                타인에게 양도하거나 대여할 수 없습니다.
              </li>
              <li>
                2. 회사의 귀책사유 없이 아이디(ID) 또는 비밀번호의 유출, 양도,
                대여로 인하여 발생하는 손실이나 손해에 대하여는 회원 본인이 그에
                대한 책임을 부담합니다.
              </li>
              <li>
                3. 회원은 아이디(ID) 또는 비밀번호를 도난당하거나 제3자가
                무단으로 이를 사용하고 있음을 인지한 경우, 이를 즉시 회사에
                통보하여야 하고 회사는 이에 대한 신속한 처리를 위하여 최선의
                노력을 다합니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제11조 [회원에 대한 통지]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사가 회원에 대한 통지를 하는 경우, 회원이 회사와 미리
                약정하여 지정한 전자우편 주소로 할 수 있습니다.
              </li>
              <li>
                2. 회사는 불특정다수 회원에 대한 통지의 경우 1주일 이상 회사
                공지사항에 게시함으로써 개별 통지에 갈음할 수 있습니다. 다만,
                회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는
                개별통지를 합니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제12조 [서비스 이용계약의 성립 및 결제방법 등]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회원은 서비스 내에서 회사가 제공하는 유료 서비스를 제공받고자
                할 경우 다음 각 호 또는 이와 유사한 절차에 의하여 서비스 이용을
                신청합니다.
                <ul className="ml-4">
                  <li>(1) 결제하기 클릭</li>
                  <li>(2) 결제</li>
                </ul>
              </li>
              <li>
                2. 회원은 다음 각호의 방법으로 대금을 지급할 수 있습니다.
                <ul className="ml-4">
                  <li>
                    (1) 애플 스토어, 구글 플레이 스토어 등 각 플랫폼에서
                    제공하는 결제 수단을 이용한 결제
                  </li>
                </ul>
              </li>
              <li>
                3. 회원은 회사가 지정하는 일부 서비스 항목 또는 일정 기한에
                한하여 무료로 서비스를 이용할 수 있습니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제13조 [회원의 의무]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회원은 다음 행위를 하여서는 안됩니다.
                <ul className="ml-4">
                  <li>(1) 신청 또는 변경 시 허위 내용의 등록</li>
                  <li>(2) 타인의 정보 수집, 저장, 게시, 유포</li>
                  <li>(3) 회사가 게시한 정보의 변경</li>
                  <li>
                    (4) 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의
                    송신 또는 게시
                  </li>
                  <li>
                    (5) 회사 기타 제3자의 저작권, 영업비밀, 특허권 등
                    지식재산권에 대한 침해
                  </li>
                  <li>
                    (6) 회사와 다른 회원 및 기타 제3자를 희롱하거나 위협하거나
                    명예를 손상시키거나 업무를 방해하는 행위
                  </li>
                  <li>(7) 기타 현행 법령에 위반되는 불법적인 행위</li>
                </ul>
              </li>
              <li>
                2. 회사는 회원이 전항에서 금지한 행위를 하는 경우 위반 행위의
                경중에 따라 서비스의 이용정지, 계약 해지 등의 서비스 이용 제한,
                손해배상청구, 수사기관 고발 등 합당한 조치를 취할 수 있습니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제14조 [저작권의 귀속 및 이용제한]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사가 작성한 저작물에 대한 저작권 기타 지식재산권은 회사에
                귀속합니다.
              </li>
              <li>
                2. 회사를 이용함으로써 얻은 정보 중 회사에게 지식재산권이 귀속된
                정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타
                방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게
                하여서는 안됩니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제15조 [이용 계약 해지 및 환불]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회원이 유료 서비스 이용 계약을 해지하고자 할 경우에는 환불
                기간 내에 회원이 이용하는 단말기에서 제공되는 앱스토어 또는
                구글플레이의 정책에 따라 서비스 해지 양식을 제출하거나 그 밖에
                전화나 기타 회사가 제공하는 방법 (전자우편,
                [cs@studiobustles.com])으로 회사에 해지 신청을 하여야 효력이
                발생하며, 회원의 일방적인 어플리케이션 삭제는 서비스 해지 신청에
                해당되지 않습니다.
              </li>
              <li>
                2. 회원의 정당한 해지 또는 환불 신청을 받은 회사는 각 유료
                서비스에 명시된 해지 또는 환불 안내에 따라 따라 절차를
                이행합니다.
              </li>
              <li>
                3. 회원이 유료 서비스를 중도 해지하는 경우, 환불 금액은 앱스토어
                또는 구글플레이의 환불 정책에 따르며 환불수수료와 결제수수료가
                공제될 수 있습니다. 다만, 합리적인 사정이 있을 경우 회사는
                별도의 절차로 환불할 수 있으며, 이 때에도 환불금액은 별다른
                사정이 없는 한 앱스토어 또는 구글플레이의 환불 정책을 기준으로
                산정됩니다.
              </li>
              <li>
                4. 본 이용약관 조항 중 앱스토어 또는 구글플레이의 환불 정책과
                배치되는 내용이 있는 경우(예컨대 환불 소요 기간 등), 앱스토어
                또는 구글플레이에서 판매하는 서비스에 대한 환불 처리는 각
                스토어의 환불 정책을 따릅니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            제16조 [책임 제한 및 면책 조항]
          </h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사는 천재지변 또는 기간 통신 사업자의 회선 장애 또는 이에
                준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는
                서비스 제공에 관한 책임이 면제됩니다.
              </li>
              <li>
                2. 회사는 회원의 귀책사유로 인하여 발생한 서비스 이용의 장애에
                대하여는 책임을 지지 않습니다.
              </li>
              <li>
                3. 회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의
                신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
              </li>
              <li>
                4. 회사는 무료로 제공되는 서비스 이용과 관련하여 관련 법령에
                특별한 규정이 없는 한 책임을 지지 않습니다.
              </li>
              <li>
                5. 회사는 회원 상호 간 또는 회원과 제3자 상호 간에 서비스를
                매개로 하여 발생한 분쟁 등에 대하여 책임을 지지 않습니다.
              </li>
              <li>
                6. 회사는 회원의 모바일 환경이나 회사의 관리 범위에 있지 아니한
                보안 문제로 인하여 발생하는 제반 문제 또는 현재의 보안 기술
                수준으로 방어가 곤란한 네트워크 해킹 등 회사의 귀책 사유 없이
                발생하는 문제에 대하여 책임을 지지 않습니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제17조 [분쟁 해결]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사는 회원이 제기하는 정당한 의견이나 불만을 반영하고 그
                피해를 보상처리하기 위하여 피해보상처리기구를 설치ㆍ운영합니다.
              </li>
              <li>
                2. 회사는 회원으로부터 제출되는 불만사항 및 의견은 우선적으로 그
                사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는
                사용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
              </li>
              <li>
                3. 회사와 회원 간에 발생한 전자상거래 분쟁과 관련하여 회원의
                피해구제신청이 있는 경우에는 공정거래위원회 또는 시ㆍ도지사가
                의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">제18조 [재판권 및 준거법]</h2>
          <div className="text-sm text-undtextgray leading-relaxed text-start">
            <ul>
              <li>
                1. 회사와 회원 간에 발생한 분쟁에 관한 소송은 민사소송법상의
                관할 법원에 제소합니다.
              </li>
              <li>
                2. 회사와 회원 간에 발생한 분쟁에 대하여는 대한민국 법을
                적용합니다.
              </li>
            </ul>
          </div>
        </section>
        <footer className="mt-8 pt-4 border-t border-gray-200">
          <p className=" text-sm text-undtextgray">
            부칙 <br /> 이 약관은 2024년 12월 18일부터 적용됩니다. 단, 본 약관의
            공지 이후 시행일 이전에 본 약관에 동의한 경우에는 동의시부터 본
            약관이 적용됩니다.
          </p>
        </footer>
      </div>
      {/* <div className="flex flex-col opacity-10 absolute bottom-10 z-10 gap-10">
        <img
          className="h-auto w-auto"
          src="../../../public/assets/img/마참내!.jpg"
          alt=""
        />
        <img
          className="h-auto w-auto"
          src="../../../public/assets/img/즐겁다.jpg"
          alt=""
        />
      </div> */}
    </div>
  );
}

export default TermsOfUse;
