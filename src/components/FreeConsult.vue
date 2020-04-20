<template >
<q-card class="form-card">
    <form name="consult-contact" data-netlify="true"
    data-netlify-honeypot="bot-field" method="post" 
    @submit.prevent="handleSubmit">
    
        <q-card-section>
            <input type="hidden" name="form-name" value="consult-contact" />
            <div class="text-h6 heading">
                Free Consultation
            </div>
        <!-- </q-card-section>
        <q-card-section> -->
            <div class="row ">
                <q-input dense
                    :rules="[
                    val => !!val || '* Required',
                    val => val.length > 3 || 'Please use min. of 4 characters',
                    ]"
                    filled
                    v-model="name"
                    label="Name"
                    class="col"
                    ref="name"/>
            </div>
            <div class="row ">
                <q-input dense
                    lazy-rules ref="email"
                    :rules="[ val => isValidEmail(val) || 'Please enter a valid email']"
                    filled
                    v-model="email"
                    label="Email"
                    class="col q-mt-sm"/>
            </div>
            <div class="row ">
                <q-input dense
                    :rules="[
                    val => !!val || '* Required',
                    
                    ]"
                    filled
                    v-model="phone"
                    label="Phone"
                    class="col q-mt-sm"
                    ref="phone"/>
            </div>
            <div class="row">
                <p>I'm interested in:</p>
                <q-option-group
                    name="request"
                    v-model="request"
                    :options="options"
                    type="checkbox"
                    color="secondary"
                    inline
                    />
            </div>
            <div class="row ">
                <q-input dense rows="4"
                    :rules="[val => !!val || '* Required',]"
                    filled type="textarea"
                    v-model="message"
                    label="Message"
                    class="col q-mt-sm"/>
            </div>
            <div class="row " data-netlify-recaptcha="true"></div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn name="cancel"
      	        label="Cancel"
                color="grey"
                v-close-popup
                />
            <q-btn name="save"
                @click.prevent="submitForm"
                label="Save"
                color="green"/>
        </q-card-actions>
    </form>
</q-card>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
    
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            request:[],
            options: [
                {
                    label: 'SPA',
                    value: 'spa'
                },
                {
                    label: 'Static Site',
                    value: 'static_site'
                },
                {
                    label: 'Java Script',
                    value: 'javaScript'
                }
            ],
        }
    },

    methods: {
        
        isValidEmail(email){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        submitForm() {
            this.$refs.name.validate()
            this.$refs.email.validate()
            this.$refs.phone.validate()
             
            if (this.$refs.name.hasError && this.$refs.email.hasError && this.$refs.phone.hasError) {
            }
            else {
                this.submitFree()
            }
        },
        submitFree() {
            let data = {
                name: this.name,
                email: this.email,
                phone: this.phone
            }
            //freeConsult()
                .then(
                        swal("Thank you, I will contact you as soon as possible", "", "success"),
                        this.v-close-popup
                        )
        },
        clearForm() {
            this.name = '',
            this.email = '',
            this.phone = ''
        }
        },
    
}
</script>
<style scoped>
    .form-card {
        min-width: 300px;
        width: 400px;
	}
	.form-card .heading {
		text-transform: capitalize;
	}
	.form-card .q-card-section {
		width: 100%;
	}
	.thumbnail {
		max-width: 50px;
		max-height: 50px;
	}
	.form-card .q-img {
		height: 56px;
		width: 56px;
		border-radius: 10px;
	}
	.form-card .q-img__image {
		background-size: cover !important;
	}
</style>