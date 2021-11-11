<template>
  <div class="container contact-form">
<div class="contact-image">
    <img src="https://cdn-icons-png.flaticon.com/512/3349/3349051.png" alt="rocket_contact"/>
</div>
      <form method="post" class="review-form" @submit.prevent="onSubmit">
          <h3>Lasciaci una recensione</h3> <br>
          <p><b>Per noi la tua opinione è importante</b></p> 
          <div class="row">
            <div class="col-md-6">
                <div class="review-form">
                  <label for="name">Nome:</label>
                    <input id="name" v-model="name" required type="text" name="txtName" class="form-control" placeholder="Nome *" value="" />
                </div>
                <div class="review-form">
                  <label for="surname">Cognome:</label>
                    <input id="surname" v-model="surname" required type="text" name="txtSurname" class="form-control" placeholder="Cognome *" value="" />
                </div>
                <div class="review-form">
                  <label for="e-mail">E-mail:</label>
                    <input type="text" v-model="email" class="form-control" placeholder="E-mail *" value="" />
                </div><br>
                <div class="review-form">
                    <input type="submit" name="btnSubmit" class="btnContact" value="Invia" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="review-form">
                  <label for="review">Recensione:</label>
                    <textarea v-model="review" class="form-control" placeholder="La tua recensione *" style="width: 100%; height: 150px;"></textarea>
                </div><br>
                <label for="rating">Voto:</label>
              <select id="rating" v-model.number="rating" required>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
        </div>
    </form>
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
.contact-form{
    background: rgba(255, 255, 255, 0.699);
    margin-top: 10%;
    margin-bottom: 5%;
    width: 70%;
}
.contact-form .form-control{
    border-radius:1rem;
}
.contact-image{
    text-align: center;
}
.contact-image img{
    width: 13%;
    margin-top: -3%;
}
.contact-form form{
    padding: 14%;
}
.contact-form form .row{
    margin-bottom: -7%;
}
.contact-form h3, p{
    margin-bottom: 8%;
    margin-top: -10%;
    text-align: center;
    color: #8C4D64;
}
.contact-form .btnContact {
    width: 50%;
    border: none;
    border-radius: 1rem;
    padding: 1.5%;
    background: #D9A3BC;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}
</style>
    
            
    

