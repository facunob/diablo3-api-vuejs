<template>
  <h1>Hero View</h1>
</template>

<script>
import setError from "@/mixins/setError";
import BaseLoading from "@/components/BaseLoading";
import { getApiHero, getApiDetailedHeroItems } from "@/api/search";

export default {
  name: "HeroView",
  mixins: [setError],
  components: { BaseLoading },
  data() {
    return {
      isLoadingHero: false,
      isLoadingItems: false,
      hero: null,
      items: null,
    };
  },
  computed: {},
  created() {
    this.isLoadingHero = true;
    this.isLoadingItems = true;
    const { region, battleTag: account, heroId } = this.$route.params;

    getApiHero({ region, account, heroId })
      .then(({ data }) => {
        this.hero = data;
      })
      .catch((err) => {
        this.hero = null;
        const errObj = {
          routeParams: this.$route.params,
          message: err.message,
        };
        if (err.response) {
          errObj.data = err.response.data;
          errObj.status = err.response.status;
        }
        this.setApiErr(errObj);
        this.$router.push({ name: "Error" });
      })
      .finally(() => {
        this.isLoadingHero = false;
      });

    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        this.items = data;
      })
      .catch((err) => {
        this.items = null;
        console.log(err);
      })
      .finally(() => {
        this.isLoadingItems = false;
      });
  },
};
</script>
