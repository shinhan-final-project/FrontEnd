# 두근두근! 주식 프렌즈!

주식 게임으로 재밌게 공부하기

## 📜 서비스 내용

**재밌는 게임**을 통해서 **전문가**가 **주식 초보**에게 전하고 싶은 **증권 정보**를 알려주는 Web Service입니다. 서비스에서 제공하는 핵심 기능 3가지:

1. **주식 용어 맞추기 퀴즈 게임**
2. **매수, 매도를 예측하는 실전 투자 게임**
3. **퀴즈 출제, 로그 관리를 위한 관리자 페이지**

## 🛠 기술 스택

- **Front-end**: React js, module css
- **Back-end**: Springboot, AWS RDS, JAVA, Gradle
- **Infra & CI/CD**: Docker, AWS ECR, AWS Route 53, AWS S3, AWS ALB, AWS EC2, AWS Elasticache
- **Open API**: 한국 예탁 결제원 - 금융 용어 조회 API, SHINHAN OPEN API, 네이버 증권 API
- **Tool**: Notion, Slack, Github



## 📝 페이지 소개

### Intro & Home

- 전문가 쏠의 세계관 및 게임의 스토리 설명을 듣고 어떤 친구를 도와 게임을 시작할 지를 선택할 수 있습니다. 
- 개념파인 레이를 클릭하면 주식 용어 맞추기 퀴즈 게임을 시작하고, 
- 실전파인 몰리를 선택하면 주어진 차트와 뉴스를 통해 매수와 매도 연습을 하는 실전 투자 게임을 시작합니다.

<div style="display: flex; justify-content: space-around;">
    <img src="./src/assets/images/Readme/image.png" alt="인트로 1" width="300" /> &nbsp;&nbsp;&nbsp;
    <img src="./src/assets/images/Readme/image-1.png" alt="인트로 2" width="300" />
</div>
<br>

### 용어 게임

- 레이가 물어보는 주식 용어에 대하여 맞는 설명을 골라 호감도를 높일 수 있습니다. 
- 총 10번의 기회로 마지막 문제를 풀때까지 호감도 100을 유지한다면 레이와 친구가 되어 보상(ex. 해외 주식 수수료 무료 쿠폰)을 받을 수 있습니다.

- 용어 게임을 관리하는 관리자 페이지를 통해서 한국 예탁 결제원에서 받아오는 용어 API의 어려운 설명을 신한투자증권의 전문가들이 직접 작성한 쉬운 설명도 함께 보여줍니다.

<br>

<div style="display: flex; justify-content: space-around;">
    <img src="./src/assets/images/Readme/image-2.png" alt="용어 게임 1" width="300" /> &nbsp;&nbsp;&nbsp;
    <img src="./src/assets/images/Readme/image-3.png" alt="용어 게임 2" width="300" />
    <br>
</div>
<div style="display: flex; justify-content: space-around;">
    <img src="./src/assets/images/Readme/laysol1.png" alt="용어 게임 1" width="300" /> &nbsp;&nbsp;&nbsp;
    <img src="./src/assets/images/Readme/laysol2.png" alt="용어 게임 2" width="300" />
    <br>
</div>

<br>

### 투자 게임

- 핫이슈 종목 API를 사용하여 받아온 특정 회사의 과거 5년치 데이터와 당시의 주요 뉴스를 통해 사용자가 스스로 매도/매수 판단을 하여 게임을 진행합니다. 
- 매년 초마다 그 해 차트와 뉴스를 보고 내년 초 주식이 상승할 것 같다면 매수를, 하락할 것 같다면 매수를 클릭하여 호감도를 높일 수 있습니다. 
- 1년마다 주가의 증감율에 따라 호감도가 증가, 하락 합니다. 총 5번의 매도, 매수의 기회가 있으며 5회까지 호감도를 100를 유지한다면 보상을 받을 수 있습니다.
- 용어 게임과 마찬가지로 관리자 페이지를 통해서 전문가가 그때 당시의 주가 상황을 그려볼 수 있는 뉴스를 제공합니다.
  
  <br>

<div style="display: flex; justify-content: space-around;">
    <img src="./src/assets/images/Readme/image-4.png" alt="투자 게임 1" width="300" /> &nbsp;&nbsp;&nbsp;
    <img src="./src/assets/images/Readme/image-5.png" alt="투자 게임 2" width="300" />
</div>
<br>


## 🌟 서비스 기대 효과 & 사업 확장성

주식 초보는 주식을 시작할 때 자신만의 투자 견해와 투자 전략을 갖추기 어렵다고 생각합니다.

고로, 신한투자증권의 전문가와 같이 뛰어난 전문가와 많이 접촉하고, 전문가 전략을 많이 관찰 할 수록 좋을 것 입니다.

본 서비스를 통해 전문가가 중요하게 생각하는 “용어” 및 “경제 상황”를 “쉽게” 파악할 수 있습니다. 

이는 곧 신한투자증권의 전문가가 중요하게 생각하는 부분을 학습할 수 있다는 의미이기도 합니다.

주식 초보에게 필요한 전문성을 전문가의 견해를 해소하고, 증권 특유의 다소 높은 진입 장벽은 재밌고 귀여운 게임을 통해 해소합니다. 

사용자는 게임에서 얻은 지식과 경험을 기반으로 실전 투자에 활용할 수 있으며, 신한 알파로의 주식 초보 유입 또한 가능하게 합니다.
