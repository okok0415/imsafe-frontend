

export const WeeklyReport = (props) => {
    const state = {
        wakeupTime: "04 : 48",
        sleepTime: "21 : 50",
        averageSleep: "6시간 15분",
        temp: '27도',
        averageTV: '4시간 38분',
        fallen: "0",
        humidity: '9% / 36.7도',
        outside: "0.7",
        refrigerator: "5",
        bathroom: "4",
        cough: "10",
    }

    return (
        <>
            <div className="title">
                {props.name}님 생활 패턴 주간 보고서
                <div className="subtitle"> (최근 7일 기준)</div>
            </div>
            <div className="averagecontent">
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">평균 기상시간</div>
                    <div className="content">{state.wakeupTime}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">평균 취침시간</div>
                    <div className="content">{state.sleepTime}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">평균 수면시간</div>
                    <div className="content">{state.averageSleep}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">평균 실내온도</div>
                    <div className="content">{state.temp}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">하루 평균 TV/Radio 시청시간 </div>
                    <div className="content">{state.averageTV}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">낙상 횟수</div>
                    <div className="content">{state.fallen}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">평균 습도/ 체온</div>
                    <div className="content">{state.humidity}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">하루 평균 외출 횟수</div>
                    <div className="content">{state.outside}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">하루 평균 냉장고 계폐</div>
                    <div className="content">{state.refrigerator}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">하루 평균 화장실 출입</div>
                    <div className="content">{state.bathroom}</div>
                </div>
                <div className="block">
                    <div className="subtitle">최근 1주일간</div>
                    <div className="title">평균 기침 횟수</div>
                    <div className="content">{state.cough}</div>
                </div>

            </div>
        </>
    )
}