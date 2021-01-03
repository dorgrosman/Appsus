import { mailService } from '../service/mail-service.js'
import { utilsService } from '../service/utils-service.js'


export const composeMail = {
    name: 'compose-mail',
    template: `
    <section>
        <form  class="main-add">

            <h2 class="title-add"><button @click="cancelAdd">X</button>Compose Mail </h2>
            <label>
                From:
                <input type="text" ref="nameInput" v-model:value="mail.user" >
            </label>
            <label>
                Subject:
                <input type="text" v-model:value="mail.subject">
            </label>
            <textarea name="moreInfo" cols="50" rows="10" v-model:value="mail.body"></textarea>
            <a @click="addMail" class="far fa-paper-plane"></a>

        </form>
            
        </section>
        `,

    data() {
        return {
            mail: null,
            addingMail: false
        }
    },
    methods: {
        addMail() {        
            mailService.addMail(this.mail)     
            this.$router.push('/mail')
            console.log('hiiiii');
        },
        cancelAdd(){
            this.$router.push('/mail')
        }
    },  
    mounted() {
        this.$refs.nameInput.focus();
    },
    created() {
        this.mail = mailService.getNewMail()
        this.addingMail = true ;
    }
}