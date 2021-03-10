<template>
  <div class="category-admin">
    <b-form>
      <input id="category-id" type="hidden" v-model="category.id" />

      <b-form-group label="Nome:" label-for="category-name">
        <b-form-input
          id="category-name"
          type="text"
          v-model="category.name"
          required
          placeholder="Informe o nome do categoria..."
          :readonly="mode === 'remove'"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Categoria Pai:" label-for="category-parentId">
        <b-form-select
          v-if="mode === 'save'"
          id="category-parentId"
          v-model="category.parentId"
          :options="categories"
        ></b-form-select>

        <b-form-input
          v-if="mode === 'remove'"
          id="category-parentId"
          v-model="category.path"
          readonly
        ></b-form-input>
      </b-form-group>

      <b-button variant="primary" v-if="mode === 'save'" @click="save">
        Salvar
      </b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
        Excluir
      </b-button>
      <b-button class="ml-2" @click="cancel"> Cancel </b-button>
    </b-form>

    <hr />

    <b-table responsive hover striped :items="categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button
          variant="warning"
          @click="loadCategory(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="loadCategory(data.item, 'remove')"
          class="mr-2"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "@/global";

export default {
  name: "CategoryAdmin",
  data: function () {
    return {
      mode: "save",
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadCategoriesAndPaths() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then((resp) => {
        this.categories = resp.data.map((category) => {
          return { ...category, value: category.id, text: category.path };
        });
      });
    },
    save() {
      const method = this.category.id ? "put" : "post";
      const id = this.category.id ? `/${this.category.id}` : "";

      axios[method](`${baseApiUrl}/categories${id}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.cancel();
        })
        .catch(showError);
    },
    remove() {
      const id = this.category.id;
      axios
        .delete(`${baseApiUrl}/categories/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.cancel();
        })
        .catch(showError);
    },
    cancel() {
      this.category = {};
      this.selected = undefined;
      this.mode = "save";
      this.loadCategoriesAndPaths();
    },
    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = { ...category };
    },
  },
  mounted() {
    this.loadCategoriesAndPaths();
  },
};
</script>

<style>
</style>