<template>
<div>
  
    <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Nome:</label>
        <input id="name" v-model="name" required />
      </p>
       <p>
        <label for="surname">Cognome:</label>
        <input id="surname" v-model="surname" required />
      </p>
       <p>
        <label for="email">E-mail:</label>
        <input id="email" v-model="email" required />
      </p>
      <p>
        <label for="review">Recensione:</label>
        <textarea id="review" v-model="review" required></textarea>
      </p>
      <p>
        <label for="rating">Voto:</label>
        <select id="rating" v-model.number="rating" required>
          <option>10</option>
          <option>9</option>
          <option>8</option>
          <option>7</option>
          <option>6</option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit"/>
      </p>
    </form>

    <ul id="example-1">
    <li v-for="item in reviews" :key="item.review">
      {{item.name}} {{item.surname}} {{item.email}} {{item.rating}}/10 - {{item.review}}
    </li>
  </ul>

</div>
</template>
  
<script>
export default{
  data: function () {
      return {
        name: null,
        surname: null,
        email: null,
        review: null,
        rating: null,
        reviews: this.$store.state.reviews
      };
    },

  methods: {
      onSubmit: function () {
        var productReview = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          review: this.review,
          rating: this.rating,
        };

        this.$store.commit("AGGIUNGI_RECENSIONE", productReview); //invece di $emit si usa $store.commit
        //this.$emit("review-submitted", productReview);
        this.name = null;
        this.surname = null;
        this.email= null;
        this.review = null;
        this.rating = null;
      },
    },
}
</script>

