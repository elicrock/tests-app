var q=Object.defineProperty;var g=(a,t,e)=>t in a?q(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>g(a,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const u=[{id:1,title:"Test's name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.",questions:[{id:1,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:6},{id:2,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:1},{id:3,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:5},{id:4,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:4},{id:5,question:"Вопрос",answers:[{id:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:2,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet."},{id:3,text:"Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet."}],correctAnswerId:3}]},{id:2,title:"Another Test",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga unde, pariatur aspernatur qui magnam modi nostrum beatae molestias inventore debitis, voluptate ipsam laboriosam sit repudiandae ut facilis numquam tempora nihil sint assumenda quaerat autem! Fugit modi labore obcaecati neque repellendus inventore. Obcaecati provident neque officiis. Totam sequi odio doloribus officiis laboriosam non sed nemo adipisci ipsum, quaerat veritatis iste recusandae cupiditate omnis perferendis illo ut aliquid quis? Ad, harum!",questions:[{id:1,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:5},{id:2,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:5},{id:3,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:5}]},{id:3,title:"Test",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolorum cumque quo aspernatur nihil explicabo maiores, architecto minus ullam voluptatem quis quidem aut ut assumenda dolor qui a necessitatibus, officia nobis fugiat veritatis amet? Molestias temporibus, velit saepe molestiae deleniti ea, maiores possimus veritatis, modi inventore cupiditate. Et dolor ratione, quisquam quis sit voluptates doloremque aliquam minus saepe provident laudantium, vitae numquam ducimus, iste at voluptatibus aliquid quo cumque? Magni inventore voluptatibus vero error, mollitia saepe nisi non eius libero earum a modi nam, culpa tempora nulla! Sequi, libero ex quaerat maiores vel ipsam animi quidem et. Expedita, nihil quo!",questions:[{id:1,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:5},{id:2,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:3},{id:3,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:6}]},{id:4,title:"Название теста",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ex repellendus atque nemo corrupti fugit reiciendis vitae corporis quis accusantium unde ratione doloremque voluptatum harum tempore quaerat nulla consequuntur asperiores? Distinctio nostrum officiis aliquid est qui aliquam aspernatur eos sequi quis optio, assumenda exercitationem. Explicabo odit est distinctio reprehenderit eligendi enim corporis minus consequatur, tempore dignissimos, officiis aspernatur soluta totam nihil unde blanditiis aut dolor voluptas nobis. Corporis ut labore corrupti quisquam veniam autem soluta, aut voluptatem, vitae possimus, temporibus ullam illo. Sunt vitae ipsum, consectetur sapiente cupiditate repellat ducimus repellendus perspiciatis. Asperiores voluptatibus cupiditate labore, praesentium cum ipsam ducimus? Distinctio soluta sapiente dolorem fuga, neque debitis alias eligendi voluptas odio aut ratione nesciunt delectus quibusdam sint beatae unde assumenda fugiat maiores quasi facere inventore maxime. Eligendi eum id ullam maxime nesciunt, laudantium, quod repellendus repudiandae corrupti voluptatum cupiditate voluptatibus iusto, incidunt assumenda ea nemo modi minus praesentium quisquam? Quae.",questions:[{id:1,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:4},{id:2,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:1},{id:3,question:"Вопрос",answers:[{id:1,text:"Вариант А"},{id:2,text:"Вариант Б"},{id:3,text:"Вариант В"},{id:4,text:"Вариант Г"},{id:5,text:"Вариант Д"},{id:6,text:"Вариант Е"}],correctAnswerId:2},{id:4,question:"Вопрос",answers:[{id:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{id:2,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet."},{id:3,text:"Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet."}],correctAnswerId:1}]}];let c=null,d=300;function w(a){c||(c=setInterval(()=>{d--;const t=Math.floor(d/3600),e=Math.floor(d%3600/60),s=d%60,i=`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;a(i),d<=0&&l()},1e3))}function l(){c&&(clearInterval(c),c=null)}class b{constructor(t,e){n(this,"container");n(this,"isOpen",!1);n(this,"activeTestId",null);n(this,"onTestSelectCallback");this.container=t,this.onTestSelectCallback=e,this.updateActiveTestFromURL(),this.render(),this.addEventListeners()}render(){this.container.innerHTML=`
      <div class="menu">
        <div class="menu__overlay"></div>
        <div class="menu__content">
          <div class="menu__header">
            <button class="menu__burger-btn">
            </button>
            <h2 class="menu__title">Тесты</h2>
          </div>
          <nav class="menu__nav">
            <ul class="menu__list">
              ${u.map(t=>`
                <li class="menu__item ${this.activeTestId===t.id?"menu__item_active":""}" data-test-id="${t.id}">
                  ${t.title}
                </li>
              `).join("")}
            </ul>
          </nav>
        </div>
      </div>
    `}addEventListeners(){this.container.addEventListener("click",t=>{const e=t.target;e.closest(".menu__burger-btn")&&this.toggle();const s=e.closest(".menu__item");if(s){const i=parseInt(s.dataset.testId);this.setActiveTest(i),this.onTestSelectCallback(i),l()}})}setActiveTest(t){this.activeTestId=t,this.container.querySelectorAll(".menu__item").forEach(e=>{const s=e;s.classList.toggle("menu__item_active",parseInt(s.dataset.testId)===t)})}resetActiveTest(){this.activeTestId=null,this.container.querySelectorAll(".menu__item").forEach(e=>{e.classList.remove("menu__item_active")})}toggle(){this.isOpen=!this.isOpen,this.updateMenuState()}updateMenuState(){const t=this.container.querySelector(".menu"),e=this.container.querySelector(".menu__burger-btn");t==null||t.classList.toggle("menu_open",this.isOpen),e==null||e.classList.toggle("menu__burger-btn_open",this.isOpen)}updateActiveTestFromURL(){const e=new URL(window.location.href).searchParams.get("test");if(e){const s=parseInt(e);this.setActiveTest(s)}else this.activeTestId=null}}class m{constructor(t){n(this,"container");this.container=t,this.render()}render(){this.container.innerHTML=`
      <div class="home-page">
        <div class="home-page__header"></div>
        <div class="home-page__content">
          <h1 class="home-page__title">Выберите тест из списка</h1>
        </div>
      </div>
    `}}class p{constructor(t,e){n(this,"container");n(this,"testId");n(this,"test");n(this,"userAnswers",{});this.container=t,this.testId=e,this.test=u.find(s=>s.id===e),this.loadUserAnswers(),this.render()}loadUserAnswers(){const e=JSON.parse(localStorage.getItem("testsResults")||"{}");this.userAnswers=e[`test_${this.testId}`]||{}}render(){if(!this.test){this.container.innerHTML="<p>Тест не найден</p>";return}const t=Object.keys(this.userAnswers).length,e=this.test.questions.length;this.container.innerHTML=`
      <div class="test-results">
        <div class="test-results__header">
          <h2 class="test-results__title">${this.test.title}</h2>
        </div>
        <div class="test-results__wrapper">
          <div class="test-results__content">
            <div class="test-results__status">
              <h3>Тест завершён</h3>
              <p>Вы ответили на ${t} из ${e} вопросов.</p>
            </div>
            <div class="test-results__text">Ваши ответы</div>
            <div class="test-results__questions">
              ${this.test.questions.map(s=>{const i=this.userAnswers[`question_${s.id}`],r=s.answers.find(x=>x.id===s.correctAnswerId),o=i?i.answerText:"Не ответили",v=r?r.text:"";return`
                    <div class="test-results__question">
                      <h3>${s.id}. ${s.question}</h3>
                      <div class="test-results__answers">
                        <p>Правильный ответ: ${v}.</p>
                        <p>Вы ответили: ${o}.</p>
                      </div>
                    </div>
                  `}).join("")}
            </div>
          </div>
          <div class="test-results__buttons">
            <button type="button" class="test-results__retry-btn">Пройти ещё раз</button>
          </div>
        </div>
      </div>
    `,this.addEventListeners()}addEventListeners(){var t;(t=this.container.querySelector(".test-results__retry-btn"))==null||t.addEventListener("click",()=>this.retryTest())}retryTest(){const t="testsResults",e=JSON.parse(localStorage.getItem(t)||"{}");delete e[`test_${this.testId}`],localStorage.setItem(t,JSON.stringify(e)),new _(this.container,this.testId)}}class h{constructor(t,e){n(this,"onExit");n(this,"onCancel");n(this,"modal",null);this.modal=document.querySelector(".modal"),this.onExit=t,this.onCancel=e}show(){var t,e;this.modal||(this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.modal.innerHTML=`
      <div class="modal__content">
        <div class="modal__header">
          <h3 class="modal__title">Вы уверены что хотите выйти?</h3>
          <p class="modal__description">Все результаты будут сброшены</h3>
        </div>
        <div class="modal__buttons">
          <button class="modal__btn modal__btn_exit">Выход</button>
          <button class="modal__btn modal__btn_cancel">Отмена</button>
        </div>
      </div>
    `,document.body.appendChild(this.modal),(t=this.modal.querySelector(".modal__btn_exit"))==null||t.addEventListener("click",()=>{this.onExit();const s=new URL(window.location.href);s.searchParams.delete("test"),window.history.replaceState({},"",s.toString())}),(e=this.modal.querySelector(".modal__btn_cancel"))==null||e.addEventListener("click",this.onCancel))}close(){this.modal&&this.modal.remove()}}class _{constructor(t,e){n(this,"container");n(this,"testId");n(this,"test");n(this,"answers",{});this.container=t,this.testId=e,this.test=u.find(s=>s.id===e),this.render(),this.startTimer()}render(){if(!this.test){this.container.innerHTML="<p>Тест не найден</p>";return}this.container.innerHTML=`
      <div class="test-started">
        <div class="test-started__header">
          <button class="test-started__exit-btn">Выход</button>
          <h2 class="test-started__title">${this.test.title}</h2>
          <div class="test-started__actions">
            <button class="test-started__reset-btn">Сбросить все ответы</button>
            <span class="test-started__progress">${this.updateProgress()||"0/0"}</span>
            <span class="test-started__timer">00:05:00</span>
          </div>
        </div>
        <form class="test-started__form">
          <div class="test-started__questions">
            ${this.test.questions.map((t,e)=>`
                <div class="test-started__question">
                  <h3 class="test-started__question-title">${e+1}. ${t.question}</h3>
                  <div class="test-started__answers">
                    ${t.answers.map(s=>{var i;return`
                      <div class="test-started__answer">
                        <input type="radio" name="question-${t.id}" value="${s.id}" id="question-${t.id}-answer${s.id}" ${((i=this.answers[t.id])==null?void 0:i.answerId)===s.id?"checked":""} />
                        <label for="question-${t.id}-answer${s.id}">${s.text}</label>
                      </div>
                      `}).join("")}
                  </div>
                </div>
              `).join("")}
          </div>
          <div class="test-started__buttons">
            <button type="button" class="test-started__finish-btn">Завершить</button>
          </div>
        </form>
      </div>
    `,this.addEventListeners(),this.startTimer()}addEventListeners(){var t,e,s;(t=this.container.querySelector(".test-started__exit-btn"))==null||t.addEventListener("click",()=>this.showExitModal()),(e=this.container.querySelector(".test-started__reset-btn"))==null||e.addEventListener("click",()=>this.resetAnswers()),this.container.querySelectorAll('input[type="radio"]').forEach(i=>{i.addEventListener("change",r=>this.handleAnswerChange(r))}),(s=this.container.querySelector(".test-started__finish-btn"))==null||s.addEventListener("click",()=>this.finishTest())}handleAnswerChange(t){var o;const e=t.target,s=Number(e.name.split("-")[1]),i=Number(e.value),r=((o=e.nextElementSibling)==null?void 0:o.textContent)||"";this.answers[`question_${s}`]={answerId:i,answerText:r},this.updateProgress()}saveAnswers(){const t="testsResults",e=JSON.parse(localStorage.getItem(t)||"{}");e[`test_${this.testId}`]=this.answers,localStorage.setItem(t,JSON.stringify(e))}showExitModal(){new h(()=>this.exitTest(),()=>this.closeModal()).show()}closeModal(){new h(()=>{},()=>{}).close()}startTimer(){w(t=>{const e=this.container.querySelector(".test-started__timer");e&&(e.textContent=t),t==="00:00:00"&&this.finishTest()})}updateProgress(){var i;const e=`${Object.keys(this.answers).length}/${((i=this.test)==null?void 0:i.questions.length)||0}`,s=this.container.querySelector(".test-started__progress");return s&&(s.textContent=e),e}resetAnswers(){this.answers={},this.container.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),this.updateProgress()}finishTest(){l(),this.saveAnswers(),new p(this.container,this.testId)}exitTest(){l(),new m(this.container),this.closeModal()}}class f{constructor(t,e,s){n(this,"container");n(this,"testId");n(this,"test");this.menu=s,this.container=t,this.testId=e,this.test=u.find(i=>i.id===e),this.render(),this.addEventListeners()}render(){if(!this.test){this.container.innerHTML="<p>Тест не найден</p>";return}const t=this.getCompletedTestFromLocalStorage();t&&t.testId===this.testId?new p(this.container,this.testId):this.container.innerHTML=`
        <div class="test">
          <div class="test__header">
            <h2 class="test__title">Описание</h2>
          </div>
          <div class="test__content">
            <p class="test__description">${this.test.description}</p>
            <div class="test__actions">
              <button class="test__start-btn">Начать</button>
              <button class="test__cancel-btn">Отмена</button>
            </div>
          </div>
        </div>
      `}addEventListeners(){const t=this.container.querySelector(".test__start-btn"),e=this.container.querySelector(".test__cancel-btn");t==null||t.addEventListener("click",()=>this.startTest()),e==null||e.addEventListener("click",()=>this.cancelTest())}startTest(){this.container.innerHTML="",new _(this.container,this.testId)}cancelTest(){const t=new URL(window.location.href);t.searchParams.delete("test"),window.history.replaceState({},"",t.toString()),this.menu.resetActiveTest(),new m(this.container)}getCompletedTestFromLocalStorage(){const e=JSON.parse(localStorage.getItem("testsResults")||"{}"),s=`test_${this.testId}`;return e[s]?{testId:this.testId}:null}}class I{constructor(){n(this,"rootElement");n(this,"contentContainer");n(this,"menu");this.rootElement=document.getElementById("app"),this.renderLayout(),this.menu=new b(this.rootElement.querySelector(".menu-container"),this.handleTestSelect.bind(this)),this.handleRoute(),window.addEventListener("popstate",this.handleRoute.bind(this))}renderLayout(){this.rootElement.innerHTML=`
      <main class="main">
        <aside class="menu-container"></aside>
        <section class="content-container"></section>
      </main>
    `,this.contentContainer=this.rootElement.querySelector(".content-container")}handleRoute(){const t=this.getTestIdFromUrl();this.contentContainer.innerHTML="",t!==null?new f(this.contentContainer,t,this.menu):new m(this.contentContainer)}handleTestSelect(t){history.pushState({},"",`?test=${t}`),this.handleRoute()}getTestIdFromUrl(){const e=new URLSearchParams(window.location.search).get("test");return e?parseInt(e,10):null}}new I;
//# sourceMappingURL=index-C3vnkfHs.js.map
