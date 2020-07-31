<template>
  <div class="home">
    <div class="container">
      <v-card>
        <div class="header-block">
          <div class="table">
            <div class="filters-wrap">
              <div class="filters">
                <v-autocomplete class="motive" placeholder="Rejection motive"></v-autocomplete>
                <v-autocomplete class="code" placeholder="Code"></v-autocomplete>
                <v-autocomplete class="region" placeholder="Region"></v-autocomplete>
                <v-autocomplete class="ddc" placeholder="DDC"></v-autocomplete>
              </div>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="search"
              ></v-text-field>
            </div>
              <v-spacer></v-spacer>
              <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
              :items-per-page= 5
              class="tbl"
            >
            </v-data-table>
          </div>
          <div class="buttons">
            <v-btn
            class="notify_all custom"
            color="primary"
            >Notify all</v-btn>
            <v-btn
            class="notify_select custom"
            color="primary"
            >Notify selected</v-btn>
            <v-btn
                class="notify_all custom"
                color="primary"
              >Send reports</v-btn>
            <v-switch  label="Send SMS"></v-switch>
            <v-switch  label="Send Email"></v-switch>
            <div class="setTime">
            <v-switch  label="Auto send at:" height="74"></v-switch>
            <v-overflow-btn
              :items="dropdown_font"
              label="07:00 AM"
              target="#dropdown-example"
              class="my-2"
            ></v-overflow-btn>
            </div>
          </div>
        </div>
      </v-card>
        <div class="footer-block">
          <div class="fields">
            <div class="textfields">
            <v-text-field
              height="60px"
              placeholder="Write E-mail to send..."
            ></v-text-field>
            <v-text-field
              height="60px"
              placeholder="Write Phone to send..."
            ></v-text-field>
            <!-- <label for="email">E-mail to send:</label>
            <input type="text" class="email"> -->
          </div>
              <v-textarea
                outlined
                name="input-7-4"
                height="120px"
                label="Customer notification preview:"
                no-resize="false"
                value="..."
              ></v-textarea>
          </div>
          <div class="send">
            <div class="send-sms">
              <v-text-field
              height="60px"
              placeholder="Write phone number..."
              class="send-sms-field"
            ></v-text-field>
            <v-btn
            class="send-sms-btn custom"
            color="primary"
            >Send SMS</v-btn>
            </div>
            <div class="getReported">
                <v-btn
                  class="notify_all custom"
                  color="primary"
                >import orders</v-btn>
                <v-btn
                class="notify_all custom"
                color="primary"
              >import customers</v-btn>
              <v-btn
                class="notify_all custom"
                color="primary"
              >import rej codes</v-btn>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',

  data: () => ({
    dropdown_font: [
      '00:00 AM',
      '01:00 AM',
      '02:00 AM',
      '03:00 AM',
      '04:00 AM',
      '05:00 AM',
      '06:00 AM',
      '07:00 AM',
      '08:00 AM',
      '09:00 AM',
      '10:00 AM',
      '11:00 AM',
      '00:00 PM',
      '01:00 PM',
      '02:00 PM',
      '03:00 PM',
      '04:00 PM',
      '05:00 PM',
      '06:00 PM',
      '07:00 PM',
      '08:00 PM',
      '09:00 PM',
      '10:00 PM',
      '11:00 PM'],
    search: '',
    headers: [
      {
        text: 'Order number',
        sortable: false,
        value: 'orderNumber'
      },
      {
        text: 'Customer Code',
        sortable: false,
        value: 'customerCode'
      },
      {
        text: 'Rejection code',
        sortable: false,
        value: 'rejCode'
      },
      {
        text: 'POC',
        sortable: false,
        value: 'firstPOC'
      },
      {
        text: 'Owner',
        sortable: false,
        value: 'firstOwner'
      },
      {
        text: 'DDC',
        sortable: false,
        value: 'DDC'
      },
      {
        text: 'Region',
        sortable: false,
        value: 'region'
      },
      {
        text: 'Count SKU',
        sortable: false,
        value: 'countSKU'
      }
    ],

    items: [
      {
        orderNumber: 9153180887,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180888,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180889,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180880,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180890,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180887,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180887,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180887,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      },
      {
        orderNumber: 9153180887,
        customerCode: 12509687,
        rejCode: null,
        firstPOC: 'La Esquina',
        firstOwner: 'Torres Velandi',
        firstPhone: 33102458479,
        firstEmail: 'Haswelvc@yandex.ru',
        countSKU: 6
      }
    ]
  }),

  async mounted(){
    this.
  }

}
</script>

<style scoped>
  .send-sms{
    display: flex;
    align-items: flex-end;
  }
  .fields{
    width: 50%;
    margin-right: 10px;
  }
  .send{
    width: 50%;
    margin-top: 60px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .send-sms-field{
    width: 90%;
  }
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
    /* margin-top: 30px; */
    /* margin-bottom: 30px; */
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

  .footer-block{
    display: flex;
    min-width: 68.75rem;
    width: 100%;
  }
  .textfields{
    margin-top: 60px;
    display: flex;
    width: 98%;
  }

  .v-text-field{
    padding: 5px;
  }

  .filters-wrap{
    display: flex;
    flex-direction: row;
  }

  .filters{
    display: flex;
    flex-direction: row;
  }

  .notify_select{
    margin-top: 10px;
  }

  .send-sms-btn{
    margin-bottom: 25px;
    margin-left: 30px;
  }

  .getReported{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .left-side, .right-side{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }
  .setTime{
    display: flex;
    align-items: center;
  }

  .custom{
    width: 200px;
  }

  .custom + .custom{
    margin-top: 30px;
  }
</style>
