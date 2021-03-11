<template>
  <div class="article-admin">
    <b-form>
      <input id="article-id" type="hidden" v-model="article.id" />

      <b-form-group label="Nome:" label-for="article-name">
        <b-form-input
          id="article-name"
          type="text"
          v-model="article.name"
          required
          placeholder="Informe o nome do categoria..."
          :readonly="mode === 'remove'"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Descrição:" label-for="article-description">
        <b-form-input
          id="article-description"
          type="text"
          v-model="article.description"
          required
          placeholder="Informe o nome do artigo..."
          :readonly="mode === 'remove'"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Imagem (URL):"
        label-for="article-imageUrl"
        v-if="mode === 'save'"
      >
        <b-form-input
          id="article-imageUrl"
          type="text"
          v-model="article.imageUrl"
          required
          placeholder="Informe o URL do artigo..."
          :readonly="mode === 'remove'"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Categoria:"
        label-for="article-category"
        v-if="mode === 'save'"
      >
        <b-form-select
          id="article-category"
          v-model="article.categoryId"
          :options="categories"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        label="Autor:"
        label-for="article-userId"
        v-if="mode === 'save'"
      >
        <b-form-select
          id="article-userId"
          v-model="article.userId"
          :options="users"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        label="Conteúdo:"
        label-for="category-content"
        v-if="mode === 'save'"
      >
        <VueEditor
          v-model="article.content"
          placeholder="Informe o Conteúdo do artigo..."
        />
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

    <b-table responsive hover striped :items="articles" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button
          variant="warning"
          @click="loadArticle(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="loadArticle(data.item, 'remove')"
          class="mr-2"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <b-pagination
      size="md"
      v-model="page"
      :total-rows="count"
      :per-page="limit"
    >
    </b-pagination>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
import { baseApiUrl, showError } from "@/global";

export default {
  name: "ArticleAdmin",
  components: { VueEditor },
  data: function () {
    return {
      mode: "save",
      article: {},
      articles: [],
      categories: [],
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "description", label: "Descrição", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadArticles() {
      const url = `${baseApiUrl}/articles?page=${this.page}`;
      axios.get(url).then((resp) => {
        this.articles = resp.data.data;
        this.count = resp.data.count;
        this.limit = resp.data.limit;
      });
    },
    loadArticle(article, mode = "save") {
      this.mode = mode;
      axios
        .get(`${baseApiUrl}/articles/${article.id}`)
        .then((res) => (this.article = res.data));
    },
    save() {
      const method = this.article.id ? "put" : "post";
      const id = this.article.id ? `/${this.article.id}` : "";

      axios[method](`${baseApiUrl}/articles${id}`, this.article)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.cancel();
        })
        .catch(showError);
    },
    remove() {
      const id = this.article.id;
      axios
        .delete(`${baseApiUrl}/articles/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.cancel();
        })
        .catch(showError);
    },
    cancel() {
      this.mode = "save";
      (this.article = {}), this.loadArticles();
    },
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then((res) => {
        this.categories = res.data.map((category) => {
          return { value: category.id, text: category.path };
        });
      });
    },
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data.map((user) => {
          return { value: user.id, text: `${user.name} - ${user.email}` };
        });
      });
    },
  },
  watch: {
    page() {
      this.loadArticles()
    }
  },
  mounted() {
    this.loadArticles();
    this.loadCategories();
    this.loadUsers();
  },
};
</script>

<style>
</style>