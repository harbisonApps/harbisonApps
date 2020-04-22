<template >
<div>
    <q-btn class="freeConsultBtn q-mb-md text-h5" 
      icon="calendar_today" outline color="secondary" 
      @click="contactDialog = true">
      Schedule your free consultation today
    </q-btn>
    <q-dialog v-model="contactDialog">
        <q-card class="form-card">
            <form name="contact" data-netlify="true"
            data-netlify-honeypot="bot-field" method="post"
            @submit.prevent="submitForm">
            
                <q-card-section>
                    <input type="hidden" name="bot-field" />
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
                            v-model="form.name"
                            label="Name"
                            class="col"
                            ref="name"/>
                    </div>
                    <div class="row ">
                        <q-input dense
                            lazy-rules ref="email"
                            :rules="[val => isValidEmail(val) || 'Please enter a valid email', val => !!val || '* Required', ]"
                            filled
                            v-model="form.email"
                            label="Email"
                            class="col q-mt-sm"/>
                    </div>
                    <div class="row ">
                        <q-input dense
                            :rules="[
                            val => !!val || '* Required',
                            
                            ]"
                            filled
                            v-model="form.phone"
                            label="Phone"
                            class="col q-mt-sm"
                            ref="phone"/>
                    </div>
                    <div class="row">
                        <p>I'm interested in:</p>
                        <q-option-group
                            name="request"
                            v-model="form.request"
                            :options="form.options"
                            type="checkbox"
                            color="secondary"
                            inline
                            ref="options"
                            />
                    </div>
                    <div class="row ">
                        <q-input dense rows="4"
                            :rules="[val => !!val || '* Required',]"
                            filled type="textarea"
                            v-model="form.message"
                            ref="message"
                            label="Message"
                            class="col q-mt-sm"/>
                    </div>
                    <div class="row " data-netlify-recaptcha="true"></div>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn name="cancel" @click.prevent="clearForm"
                        label="Cancel"
                        color="red"
                        v-close-popup
                        />
                    <q-btn name="reset" label="reset" type="reset" @click.prevent="clearForm" color="grey"/>
                    <q-btn name="submit"
                        @click.prevent="submitForm"
                        
                        label="Submit"
                        color="green"/>
                </q-card-actions>
            </form>
        </q-card>
    </q-dialog>
</div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
    
    data() {
        return {
            contactDialog: false,
            form: {
            name: '',
            email: '',
            phone: '',
            message: '',
            request:[],
            options: [
                {
                    label: 'SPA',
                    value: 'SPA'
                },
                {
                    label: 'Static Site',
                    value: 'Static Site'
                },
                {
                    label: 'Java Script',
                    value: 'Java Script'
                }
            ],
            }
        }
    },

    methods: {
        
        isValidEmail(email){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        encode(data){
            return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join(``)
        },
        submitForm() {
            this.$refs.name.validate()
            this.$refs.email.validate()
            this.$refs.phone.validate()
             
            if (this.$refs.name.hasError && this.$refs.email.hasError && this.$refs.phone.hasError) {
            }
            else {
                this.handleSubmit()
            }
        },
        handleSubmit() {
            fetch('/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-urlencoded'
                },
                body: this.encode({
                    'form-name': 'contact',
                    name: this.form.name,
                    email: this.form.email,
                    phone: this.form.phone,
                    request: this.form.request.toString(),
                    message: this.form.message
                })
            })
            .then(() =>{
                
                swal("Thank you, I will contact you as soon as possible", "", "success"),
                this.contactDialog = false,
                this.clearForm(),
                console.log("console log", this.$data)
            })    
            .catch((err) => {
                swal("Something went wrong, please try again", "", "error"),
                console.error("console log",err)
            })
                
        },
        clearForm() {
            this.form.name = '',
            this.form.email = '',
            this.form.phone = '',
            this.form.request = [],
            this.form.message = ''
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
    .freeConsultBtn{
        min-width: 300px;
        max-width: 350px;
        height: 150px;
    }
</style>