<template>
  <div class="grid-container">
    <div class="grid-container-item">
      <div class="actor">
        <div class="actor-img">
          <img :src="getActor(this.$route.params.id).photo" alt="" />
        </div>
        <div class="actor-bio">
          <h3>{{ getActor(this.$route.params.id).name }}</h3>
          <p>{{ getActor(this.$route.params.id).text }}</p>
          <template
            v-if="getFilmsByPerson(getActor(this.$route.params.id).name).length"
          >
            <h5>Фильмы с участием актера</h5>
            <div class="actor-films">
              <div
                class="actor-films-item"
                v-for="item in getFilmsByPerson(
                  getActor(this.$route.params.id).name
                )"
                @click="this.$router.push(`/film/${item.slug}`)"
              >
                <img :src="item.poster" :alt="item.name" />
              </div></div
          ></template>
        </div>
      </div>
    </div>
    <div class="grid-container-item">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Search from "@/components/search";
export default {
  name: "actorPage",
  components: {
    Search,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getActor: "films/getActor",
      getFilmsByPerson: "films/getFilmsByPerson",
    }),
  },
};
</script>

<style scoped lang="less">
.actor {
  display: flex;
  @media @lg {
    flex-direction: column;
  }
  &-img {
    flex-basis: 30%;
    .br(10px);
    overflow: hidden;
    align-self: flex-start;
    @media @lg {
      flex-basis: initial;
      width: 100%;
      max-height: 400px ;
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
  &-bio {
    flex-basis: 70%;
    margin-left: 1.5em;
    padding: 1em;
    background: #fff;
    .br(10px);

    @media @lg {
      flex-basis: initial;
      margin-left: 0;
      margin-top: 1em;
    }
    h3,
    h5 {
      margin-bottom: 1em;
    }

    p {
      text-align: justify;
    }
  }
  &-films {
    display: flex;
    margin-left: -15px;
    margin-top: -15px;
    flex-wrap: wrap;
    &-item {
      margin-left: 15px;
      margin-top: 15px;
      border: 1px solid @red;
      .br(10px);
      overflow: hidden;
      cursor: pointer;
      width: calc(100% / 5 - 15px);
      @media @lg {
        width: calc(100% / 4 - 15px);
      }
      @media @md {
        width: calc(100% / 2 - 15px);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
