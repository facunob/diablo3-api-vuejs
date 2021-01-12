<template>
  <div>
    <base-loading v-if="isLoading" />
    <template v-if="profileData !== null">
      <main-block :profileData="profileData" />
      <artisans-block :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import BaseLoading from "@/components/BaseLoading";
import setError from "@/mixins/setError";
import { getApiAccount } from "@/api/search";
import MainBlock from "./MainBlock/Index.vue";
import ArtisansBlock from "./ArtisansBlock/Index.vue";

export default {
  name: "ProfileView",
  components: { BaseLoading, MainBlock, ArtisansBlock },
  data() {
    return {
      profileData: null,
      isLoading: false,
    };
  },
  computed: {
    artisansData() {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore,
      };
    },
  },
  methods: {
    fetchData() {
      //api
    },
  },
  created() {
    this.isLoading = true;
    const { region, battleTag: account } = this.$route.params;
    getApiAccount({ region, account })
      .then(({ data }) => {
        this.profileData = data;
      })
      .catch((err) => {
        this.profileData = null;
        // Creamos el objeto error
        const errObj = {
          routeParams: this.$route.params,
          message: err.message,
        };
        if (err.response) {
          errObj.data = err.response.data;
          errObj.status = err.response.status;
        }
        // Hacemos uso del Mixin
        // Guardamos el objeto en el Store
        this.setError.setApiErr(errObj);
        // Navegamos a la ruta de nombre 'Error'
        this.$router.push({ name: "Error" });
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
