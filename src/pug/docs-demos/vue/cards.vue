<template>
  <f7-app>
    <f7-view main>
      <f7-page>
        <f7-navbar title="Cards"></f7-navbar>
        <f7-block-title>Simple Cards</f7-block-title>
        <f7-card
          content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
        ></f7-card>
        <f7-card
          title="Card header"
          content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
          footer="Card footer"
        ></f7-card>
        <f7-card
          content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
        ></f7-card>

        <f7-block-title>Outline Cards</f7-block-title>
        <f7-card
          outline
          content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
        ></f7-card>
        <f7-card
          outline
          title="Card header"
          content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
          footer="Card footer"
        ></f7-card>
        <f7-card
          outline
          content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
        ></f7-card>

        <f7-block-title>Styled Cards</f7-block-title>
        <f7-card class="demo-card-header-pic">
          <f7-card-header
            class="no-border"
            valign="bottom"
            style="
              background-image: url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);
            "
            >Journey To Mountains</f7-card-header
          >
          <f7-card-content>
            <p class="date">Posted on January 21, 2015</p>
            <p>
              Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
              felis. Phasellus quis nibh hendrerit...
            </p>
          </f7-card-content>
          <f7-card-footer>
            <f7-link>Like</f7-link>
            <f7-link>Read more</f7-link>
          </f7-card-footer>
        </f7-card>
        <f7-card class="demo-card-header-pic">
          <f7-card-header
            class="no-border"
            valign="bottom"
            style="
              background-image: url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg);
            "
            >Journey To Mountains</f7-card-header
          >
          <f7-card-content>
            <p class="date">Posted on January 21, 2015</p>
            <p>
              Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
              felis. Phasellus quis nibh hendrerit...
            </p>
          </f7-card-content>
          <f7-card-footer>
            <f7-link>Like</f7-link>
            <f7-link>Read more</f7-link>
          </f7-card-footer>
        </f7-card>

        <f7-block-title>Facebook Cards</f7-block-title>
        <f7-card class="demo-facebook-card">
          <f7-card-header class="no-border">
            <div class="demo-facebook-avatar">
              <img
                src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg"
                width="34"
                height="34"
              />
            </div>
            <div class="demo-facebook-name">John Doe</div>
            <div class="demo-facebook-date">Monday at 3:47 PM</div>
          </f7-card-header>
          <f7-card-content :padding="false">
            <img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" width="100%" />
          </f7-card-content>
          <f7-card-footer class="no-border">
            <f7-link>Like</f7-link>
            <f7-link>Comment</f7-link>
            <f7-link>Share</f7-link>
          </f7-card-footer>
        </f7-card>
        <f7-card class="demo-facebook-card">
          <f7-card-header class="no-border">
            <div class="demo-facebook-avatar">
              <img
                src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg"
                width="34"
                height="34"
              />
            </div>
            <div class="demo-facebook-name">John Doe</div>
            <div class="demo-facebook-date">Monday at 2:15 PM</div>
          </f7-card-header>
          <f7-card-content>
            <p>What a nice photo i took yesterday!</p>
            <img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" width="100%" />
            <p class="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
          </f7-card-content>
          <f7-card-footer class="no-border">
            <f7-link>Like</f7-link>
            <f7-link>Comment</f7-link>
            <f7-link>Share</f7-link>
          </f7-card-footer>
        </f7-card>

        <f7-block-title>Cards With List View</f7-block-title>
        <f7-card>
          <f7-card-content :padding="false">
            <f7-list>
              <f7-list-item link="#">Link 1</f7-list-item>
              <f7-list-item link="#">Link 2</f7-list-item>
              <f7-list-item link="#">Link 3</f7-list-item>
              <f7-list-item link="#">Link 4</f7-list-item>
              <f7-list-item link="#">Link 5</f7-list-item>
            </f7-list>
          </f7-card-content>
        </f7-card>
        <f7-card title="New Releases:">
          <f7-card-content :padding="false">
            <f7-list medial-list>
              <f7-list-item title="Yellow Submarine" subtitle="Beatles">
                <template #media>
                  <img src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" />
                </template>
              </f7-list-item>
              <f7-list-item title="Don't Stop Me Now" subtitle="Queen">
                <template #media>
                  <img src="https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg" width="44" />
                </template>
              </f7-list-item>
              <f7-list-item title="Billie Jean" subtitle="Michael Jackson">
                <template #media>
                  <img src="https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg" width="44" />
                </template>
              </f7-list-item>
            </f7-list>
          </f7-card-content>
          <f7-card-footer>
            <span>January 20, 2015</span>
            <span>5 comments</span>
          </f7-card-footer>
        </f7-card>

        <f7-block-title>Expandable Cards</f7-block-title>
        <f7-card expandable>
          <f7-card-content :padding="false">
            <div class="bg-color-red" :style="{ height: '300px' }">
              <f7-card-header text-color="white" class="display-block">
                Framework7
                <br />
                <small :style="{ opacity: 0.7 }">Build Mobile Apps</small>
              </f7-card-header>
              <f7-link
                card-close
                color="white"
                class="card-opened-fade-in"
                :style="{ position: 'absolute', right: '15px', top: '15px' }"
                icon-f7="xmark_circle_fill"
              ></f7-link>
            </div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to develop hybrid
                mobile apps or web apps with iOS or Android (Material) native look and feel. It is
                also an indispensable prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir Kharlampidi
                (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an opportunity to create iOS and
                Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7
                is full of freedom. It doesn't limit your imagination or offer ways of any solutions
                somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused only on iOS and
                Android (Material) to bring the best experience and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and Android hybrid app
                (Cordova or Capacitor) or web app that looks like and feels as great native iOS or
                Android (Material) apps.
              </p>
            </div>
          </f7-card-content>
        </f7-card>

        <f7-card expandable>
          <f7-card-content :padding="false">
            <div class="bg-color-yellow" :style="{ height: '300px' }">
              <f7-card-header text-color="black" class="display-block">
                Framework7
                <br />
                <small :style="{ opacity: 0.7 }">Build Mobile Apps</small>
              </f7-card-header>
              <f7-link
                card-close
                color="black"
                class="card-opened-fade-in"
                :style="{ position: 'absolute', right: '15px', top: '15px' }"
                icon-f7="xmark_circle_fill"
              ></f7-link>
            </div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to develop hybrid
                mobile apps or web apps with iOS or Android (Material) native look and feel. It is
                also an indispensable prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir Kharlampidi
                (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an opportunity to create iOS and
                Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7
                is full of freedom. It doesn't limit your imagination or offer ways of any solutions
                somehow. Framework7 gives you freedom!
              </p>
              <p>
                Framework7 is not compatible with all platforms. It is focused only on iOS and
                Android (Material) to bring the best experience and simplicity.
              </p>
              <p>
                Framework7 is definitely for you if you decide to build iOS and Android hybrid app
                (Cordova or Capacitor) or web app that looks like and feels as great native iOS or
                Android (Material) apps.
              </p>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-page>
    </f7-view>
  </f7-app>
</template>
<style>
.demo-card-header-pic .card-header {
  height: 40vw;
  background-size: cover;
  background-position: center;
  color: #fff;
}
.demo-card-header-pic .card-content-padding .date {
  color: #8e8e93;
}
.demo-facebook-card .card-header {
  display: block;
  padding: 10px;
}
.demo-facebook-card .demo-facebook-avatar {
  float: left;
}
.demo-facebook-card .demo-facebook-name {
  margin-left: 44px;
  font-size: 14px;
  font-weight: 500;
}
.demo-facebook-card .demo-facebook-date {
  margin-left: 44px;
  font-size: 13px;
  color: #8e8e93;
}
.demo-facebook-card .card-footer {
  background: #fafafa;
}
.dark .demo-facebook-card .card-footer {
  background-color: transparent;
}
.demo-facebook-card .card-footer a {
  color: #81848b;
  font-weight: 500;
}
.demo-facebook-card .card-content img {
  display: block;
}
.demo-facebook-card .card-content-padding {
  padding: 15px 10px;
}
.demo-facebook-card .card-content-padding .likes {
  color: #8e8e93;
}
</style>
