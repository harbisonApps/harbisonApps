<template >
    <q-card class="form-card">
        <q-card-section>
            <div class="text-h6 heading">
                Free Consultation
            </div>
        </q-card-section>
        <q-card-section>
            <div class="row ">
                <q-input dense
                    :rules="[
                    val => !!val || '* Required',
                    val => val.length > 3 || 'Please use min. of 4 characters',
                    ]"
                    filled
                    v-model="name"
                    label="Name"
                    class="col q-mt-sm"
                    ref="name"/>
            </div>
            <div class="row ">
                <q-input dense
                    lazy-rules ref="email"
                    :rules="[ val => isVaildEmail(val) || 'Please enter a vaild email']"
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
    </q-card>
</template>
<script>
import swal from "sweetalert";
export default {
    
    data() {
        return {
            name: '',
            email: '',
            phone:''
        }
    },

    methods: {
        
        isVaildEmail(email){
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
        max-width: 450px;
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