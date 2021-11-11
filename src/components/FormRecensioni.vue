<!--<template> 
  <div>
    <div class="form-holder"> 
      <div class="form-content"> 
        <div class="form-items"> 
          <h3>Lasciaci una recensione</h3> 
          <p><b>Per noi la tua opinione è importante</b></p> 
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
              <label for="e-mail">E-mail:</label>
              <input id="e-mail" v-model="email" required />
            </p>
            <p>
              <label for="review">Recensione:</label>
              <textarea id="review" v-model="review" required></textarea>
            </p>
            <p>
              <label for="rating">Voto:</label>
              <select id="rating" v-model.number="rating" required>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </p>

            <p> 
              <input type="submit" value="Invia"/> 
            </p>
          </form>
        </div>
      </div> 
    </div> 
      <ul id="example-1"> 
      <li v-for="item in reviews" :key="item.review"> 
        {{item.name}} {{item.surname}} <br>
        {{item.email}} <br>
        {{item.rating}}/5 - {{item.review}} 
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
 
<style scoped> 
 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap'); 
 
*, body { 
    font-family: 'Poppins', sans-serif; 
    font-weight: 400;
    -webkit-font-smoothing: antialiased; 
    text-rendering: optimizeLegibility; 
    -moz-osx-font-smoothing: grayscale; 
} 
 
/*html, body { 
    height: 100%; 
    background-color: #152733; 
    overflow: hidden; 
}*/

.form-holder { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
} 
 
.form-holder .form-content { 
    position: relative; 
    text-align: center; 
    display: -webkit-box; 
    display: -moz-box; 
    display: -ms-flexbox; 
    display: -webkit-flex; 
    display: flex; 
    -webkit-justify-content: center; 
    justify-content: center; 
    -webkit-align-items: center; 
    align-items: center; 
    padding: 60px; 
} 
 
.form-content .form-items { 
    border: 3px solid #ceb1be; 
    padding: 20px; 
    display: inline-block; 
    width: 100%; 
    min-width: 540px; 
    -webkit-border-radius: 10px; 
    -moz-border-radius: 10px; 
    border-radius: 10px; 
    text-align: left; 
    -webkit-transition: all 0.4s ease; 
    transition: all 0.4s ease; 
} 
 
.form-content h3 { 
    color: #ceb1be; 
    text-align: center; 
    font-size: 28px; 
    font-weight: 600; 
    margin-bottom: 5px; 
} 
 
.form-content h3.form-title { 
    margin-bottom: 30px; 
} 
 
.form-content p { 
    color: #ceb1be; 
    text-align: center; 
    font-size: 17px; 
    font-weight: 300; 
    line-height: 20px; 
    margin-bottom: 30px; 
} 
 
 
.form-content label{ 
    color: #ceb1be; 
} 
 
.form-content input[type=text], .form-content input[type=password], .form-content input[type=email], .form-content select { 
    width: 20%; 
    padding: 9px 20px; 
    text-align: center; 
    border-color: #ceb1be; 
    outline: 0; 
    border-radius: 6px; 
    background-color: rgb(255, 255, 255); 
    font-size: 15px; 
    font-weight: 300; 
    color: #ceb1be; 
    -webkit-transition: all 0.3s ease; 
    transition: all 0.3s ease; 
    margin-top: 16px; 
} 
 
.form-content textarea { 
    position: static !important; 
    width: 100%; 
    padding: 8px 20px; 
    border-radius: 6px; 
    text-align: left; 
    background-color: #fff; 
    border: 0; 
    font-size: 15px; 
    font-weight: 300; 
    outline: none; 
    resize: none; 
    height: 120px; 
    -webkit-transition: none; 
    transition: none; 
    margin-bottom: 14px; 
} 
 
.form-content textarea:hover, .form-content textarea:focus { 
  background-color: white;  
} 
 
.mv-up{ 
    margin-top: -9px !important;
    margin-bottom: 8px !important; 
} 
</style>-->

<template> 
  <div>
    <div class="form-holder"> 
      <div class="form-content"> 
        <div class="form-items"> 
          <h3>Lasciaci una recensione</h3> 
          <p><b>Per noi la tua opinione è importante</b></p> 
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
              <label for="e-mail">E-mail:</label>
              <input id="e-mail" v-model="email" required />
            </p>
            <p>
              <label for="review">Recensione:</label>
              <textarea id="review" v-model="review" required></textarea>
            </p>
            <p>
              <label for="rating">Voto:</label>
              <select id="rating" v-model.number="rating" required>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </p>

            <p> 
              <input type="submit" value="Invia"/> 
            </p>
          </form>
        </div>
      </div> 
    </div> 
      <ul id="example-1"> 
      <li v-for="item in reviews" :key="item.review"> 
        {{item.name}} {{item.surname}} <br>
        {{item.email}} <br>
        {{item.rating}}/5 - {{item.review}} 
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

<style scoped>
.form-group{
    padding: 9px; 
   
    outline: 0; 
    }
   
</style>
