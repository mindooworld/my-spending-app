<template>
  <main class="home-container">
    <header class="header">
      <div class="user-info">
        <span class="date">2월 20일 금요일</span>
        <h1 class="greeting">오늘도 행복한 하루 되세요, <br/>민주님!</h1>
        <p class="status-msg">이번 달 예산이 <span class="highlight">15%</span> 남았어요</p>
      </div>
      <div class="profile-area">
        <div class="avatar">
          <div class="status-dot"></div>
        </div>
      </div>
    </header>

    <section class="total-spending">
      <h2 class="section-title">이번 달 지출 현황</h2>
      <div class="amount-card">
        <span class="label">2월 총 소비</span>
        <div class="value">2,450,000<span>원</span></div>
        <div class="trend up">지난달보다 12% 더 썼어요</div>
      </div>
    </section>

    </main>
</template>

<style lang="scss" scoped>
.home-container {
  padding: 3.2rem 2.4rem;
  padding-bottom: 10rem; // 하단 탭 여유 공간
}

.header {
  @include flex-between;
  margin-bottom: 4rem;

  .date {
    font-size: 1.2rem;
    color: $secondary;
  }

  .greeting {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 0.8rem;
  }

  .status-msg {
    font-size: 1.4rem;
    color: $secondary;
    margin-top: 0.4rem;
    
    .highlight {
      color: $lime;
      font-weight: 600;
    }
  }

  .avatar {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: $surface;
    border: 1px solid $divider;
    position: relative;

    .status-dot {
      position: absolute;
      bottom: 0.2rem;
      right: 0.2rem;
      width: 1.2rem;
      height: 1.2rem;
      background-color: $lime;
      border-radius: 50%;
      border: 2px solid $background;
    }
  }
}

.total-spending {
  .section-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }

  .amount-card {
    .label {
      font-size: 1.4rem;
      color: $secondary;
    }

    .value {
      font-size: 4.2rem;
      font-weight: 700;
      letter-spacing: -0.05rem;
      margin: 0.8rem 0;
      
      span {
        font-size: 2.4rem;
        margin-left: 0.4rem;
      }
    }

    .trend {
      font-size: 1.4rem;
      &.up { color: $accent; }
    }
  }
}
</style>