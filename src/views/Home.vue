<template>
  <div class="home">
    <v-container fluid>
      <v-card>
        <div class="header-block">
          <div class="table">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="search"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="items"
                :search="search"
                :items-per-page= 5
                class="tbl"
                item-key="order_id"
                show-select
                single-select
            >
            </v-data-table>
          </div>
          <div class="buttons">
            <v-btn
            color="primary"
            >Notify all</v-btn>
            <v-btn
            color="primary"
            >Notify select</v-btn>
            <v-switch  label="Send SMS"></v-switch>
            <v-switch  label="Send Email"></v-switch>
            <v-switch  label="Auto send at:"></v-switch>
          </div>
        </div>
      </v-card>
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="emailToSend" label="Email to send" readonly></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="phoneToSend" label="Phone to send" readonly></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-textarea
                  v-model="messageSendTo"
                  name="message"
                  label="Message text"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',

  data: () => ({
    search: '',
    selected: [],
    emailToSend: null,
    phoneToSend: null,
    messageSendTo: null,
    headers: [
      {
        text: 'Order number',
        sortable: false,
        value: 'order_id'
      },
      {
        text: 'Rejection code',
        sortable: false,
        value: 'rejection_code'
      },
      {
        text: 'E-mail',
        sortable: false,
        value: 'email'
      },
      {
        text: 'Name',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Phone number',
        sortable: false,
        value: 'phone'
      },
      {
        text: 'E-mail message',
        sortable: false,
        value: 'email_msg'
      }
    ],

    items: [
      {
        order_id: 9153149286,
        rejection_code: 'ZP',
        email: 'oks-8k31@mail.ru',
        name: 'PerilLa Castro Raul',
        phone: '79069513035-79994959679',
        email_msg: 'Content'
      },
      {
        order_id: 9153149283,
        rejection_code: 'ZP',
        email: 'oks-8k31@mail.ru',
        name: 'PerilLa Castro Raul',
        phone: '79069513035-79994959679',
        email_msg: 'Content'
      },
      {
        order_id: 9153149287,
        rejection_code: 'ZP',
        email: 'oks-8k31@mail.ru',
        name: 'PerilLa Castro Raul',
        phone: '79069513035-79994959679',
        email_msg: 'Content2'
      },
      {
        order_id: 9153149286,
        rejection_code: 'ZP',
        email: 'oks-8k31@mail.ru',
        name: 'PerilLa Castro Raul',
        phone: '79069513035-79994959679',
        email_msg: 'Content3'
      }
    ]
  }),
  watch: {
    selected () {
      if (this.selected[0]) {
        this.emailToSend = this.selected[0].email
        this.phoneToSend = this.selected[0].phone
        this.messageSendTo = this.selected[0].email_msg
      } else {
        this.emailToSend = null
        this.phoneToSend = null
        this.messageSendTo = null
      }
    }
  }
}
</script>

<style scoped>
  .home{
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .container{
    max-width: 68.75rem;
    width: 100%;
    height: 100%;
    margin-left: 30px;
    margin-right: 30px;
  }

  .search{
    margin-top: 30px;
    margin-bottom: 30px;
    width: 40%;
  }

  .table{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    max-width: 55.438rem;
    width: 100%;
    margin-left: 30px;
  }

  .tbl{
    min-width: 22.375rem;
    height: 100%;
  }

  .header-block{
    display: flex;
  }

  .buttons{
    min-width: 13.875rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
