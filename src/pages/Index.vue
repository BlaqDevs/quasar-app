<template>
  <q-page class="">
    <div class="q-py-lg q-px-md">
      <div class="row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            autogrow
            bottom-slots
            v-model="newBweetContent"
            Placeholder="What's happening"
            counter
            maxlength="280"
            :dense="dense"
            class="new-bweet"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="../assets/me.jpeg" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            unelevated
            rounded
            color="primary"
            label="Bweet"
            no-caps
            :disable="!newBweetContent"
            class="q-mb-md"
            @click="addNewBweet"
          />
        </div>
      </div>
    </div>
    <q-separator size="10px" />

    <q-list separator class="">
      <q-item-label header>Bweets</q-item-label>

      <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow"
      >
        <q-item class="q-py-md" v-for="bweet in bweets" :key="bweet.date">
          <q-item-section avatar top>
            <q-avatar size="xl">
              <img src="../assets/me.jpeg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1"
              ><strong>Blaqdevs</strong>
              <span class="text-grey-7" caption
                >@sir3blaq <br class="lt-md" />
                &bull; {{ formatDistance(new Date(), bweet.date) }}</span
              ></q-item-label
            >
            <q-item-label class="bweet-content text-body1">
              {{ bweet.content }}
            </q-item-label>
            <div class="row justify-between bweet-icons q-mt-md">
              <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
              <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
              <q-btn flat round color="grey" icon="far fa-heart" size="sm" />
              <q-btn
                flat
                round
                color="grey"
                icon="fas fa-trash"
                size="sm"
                @click="deleteBweet(bweet)"
              />
            </div>
          </q-item-section>
        </q-item>
      </transition-group>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { formatDistance } from "date-fns";
import db from "../boot/firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc
} from "firebase/firestore";

export default defineComponent({
  name: "Index",
  data() {
    return {
      formatDistance,
      newBweetContent: "",
      dense: false,
      bweets: [
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipiscipsam consequatur quia minus blanditiis cupiditate, libero veroquibusdam, non vitae aspernatur voluptate. Quos accusamus ipsarerum, hic sapiente saepe porro!",
          date: 1636192041490,
        },
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipiscipsam consequatur quia minus blanditiis cupiditate, libero veroquibusdam, non vitae aspernatur voluptate. Quos accusamus ipsarerum, hic sapiente saepe porro!",
          date: 1636192041240,
        },
      ],
    };
  },
  methods: {
    addNewBweet() {
      let newBweet = {
        content: this.newBweetContent,
        date: Date.now(),
      };
    //   async function newbw() {
    //     const docRef = await addDoc(collection(db, "bweets"), {
    //    newBweet
    //   });
    //   console.log("Document written with ID: ", docRef.id);

    // }
    this.bweets.push(newBweet)
    this.newBweetContent = "";
      newbw()
      
    },
    deleteBweet(bweet) {
      console.log(bweet);
      let dateToDelete = bweet.date;
      let index = this.bweets.findIndex((bweet) => bweet.date === dateToDelete);
      this.bweets.splice(index, 1);
    },
  },
  mounted() {
    const q = query(collection(db, "bweets"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let newbweet = change.doc.data();
        if (change.type === "added") {
          this.bweets.unshift(newbweet);
          console.log("New city: ", newbweet);
        }
        if (change.type === "modified") {
          console.log("Modified city: ", newbweet);
        }
        if (change.type === "removed") {
          console.log("Removed city: ", newbweet);
        }
      });
    });
  },
});
</script>

<style lang="sass">
.new-bweet
  textarea
    font-size: 19px
    line-height: 1.4 !important

.bweet-content
  white-space: pre-line

.bweet-icon
  margin-left: -5px
</style>
