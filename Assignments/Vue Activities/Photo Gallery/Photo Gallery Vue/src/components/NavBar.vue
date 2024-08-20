<script setup></script>

<template>
  <div class="nav-section animate__animated animate__fadeInDown">
    <div class="logo-container">
      <img src="../assets/images/donut.png" class="logo-icon" alt="logo" />
      <h1 class="logo">lens</h1>
      <p class="logo-text">The Golden Hour</p>
    </div>
    <a href="#" class="nav-right feed-link">Feed</a>
    <button class="create-acc-btn zig-zag nav-right">
      <a href="#">Create Account</a>
    </button>
  </div>
</template>

<style scoped>
.nav-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 15px 150px 15px;
}

a:link {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: rgb(10, 10, 10);
}
a:visited {
  text-decoration: none;
  color: rgb(10, 10, 10);
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}

.create-acc-btn a {
  color: #fff;
}

.logo-container {
  display: flex;
}

.logo,
.logo-text {
  visibility: hidden;
}

.logo-icon {
  width: 60px;
  height: 60px;
  margin-top: 8px;
}

.logo:hover {
  text-shadow: 1px 1px #d68e29, 2px 2px #e4a401, 4px 4px #ee9f00,
    6px 6px #fbc439, 8px 8px #ffbf5e;
}

.feed-link {
  padding-right: 30px;
}

.zig-zag {
  --mask: linear-gradient(#000 0 0) center/calc(100% - 8px) calc(100% - 8px)
      no-repeat,
    conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) 0 0 /8px
      4px space no-repeat,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 0
      100%/8px 4px space no-repeat,
    conic-gradient(from 45deg at left, #0000, #000 1deg 89deg, #0000 90deg) 0 0 /4px
      8px no-repeat space,
    conic-gradient(from -135deg at right, #0000, #000 1deg 89deg, #0000 90deg)
      100% 0/4px 8px no-repeat space;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.create-acc-btn {
  padding: 12px 20px;
  border: none;
  background-color: rgb(28, 28, 28);
  transition: background-color 0.5s ease;
}
.create-acc-btn:hover {
  background-color: #ffac07;
}

@media screen and (min-width: 768px) {
  a:link {
    font-size: 1rem;
  }

  .nav-section {
    display: flex;
    flex-direction: row;
    margin: auto auto 150px auto;
    justify-content: space-between;
  }
  .logo-container {
    flex-direction: column;
    margin-top: -110px;
    margin-left: 40px;
  }

  .logo {
    visibility: visible;
    font-size: 6.5rem;
    font-variation-settings: "wght" 900;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: text-shadow 1s;
  }
  .logo-text {
    visibility: visible;
    font-size: 0.9rem;
    margin-left: 8px;
    margin-top: -80px;
  }
  .logo-icon {
    visibility: hidden;
  }

  .create-acc-btn {
    margin-right: 55px;
    padding: 25px 30px;
  }
  .feed-link {
    margin-left: 15%;
  }
}

@media screen and (min-width: 1100px) {
  .logo-container {
    margin-top: -140px;
  }
  .logo {
    font-size: 9.5rem;
  }

  .logo-text {
    margin-top: -120px;
  }
  feed-link {
    margin-left: 30%;
  }
}
</style>
