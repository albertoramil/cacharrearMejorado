<template>
  <v-container>    
    <v-layout>
      <v-card width="100%">
        <v-card-title>
          Terminales
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="phones" :search="search">
           <template v-slot:items="props">
             <td>{{ props.item.modelo }}</td>
            <td class="text-xs-right">{{ props.item.mac }}</td>
            <td class="text-xs-right">{{ props.item.extension }}</td>
            <td class="text-xs-right">{{ props.item.dominio }}</td>
            <td class="text-xs-right">
              <v-btn fab dark small color="primary" @click="openEdit(props.item)">
                <v-icon dark>edit</v-icon>
              </v-btn>
              <v-btn fab dark small color="red" @click="deletePhone(props.item)">
                <v-icon dark>remove</v-icon>
              </v-btn>
            </td>
          </template>
          <v-alert
            v-slot:no-results
            :value="true"
            color="error"
            icon="warning"
          >Your search for "{{ search }}" found no results.</v-alert>
        </v-data-table>
      </v-card>
    </v-layout>
    <!--  -->
    <v-layout>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog_new" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn fab dark color="green" v-on="on">
            <v-icon dark>add</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Nuevo terminal</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="insertPhone(phone)" id="new-phone-form">
              <v-text-field
                name="modelo"
                label="Modelo"
                type="text"
                placeholder="snomD120"
                v-model="phone.modelo"
              ></v-text-field>
              <v-text-field
                name="mac"
                label="MAC"
                type="text"
                placeholder="001122334455"
                v-model="phone.mac"
              ></v-text-field>
              <v-text-field
                name="realname"
                label="Nombre"
                type="text"
                placeholder="Recepción <200>"
                v-model="phone.realname"
              ></v-text-field>
              <v-text-field
                name="extension"
                label="Usuario"
                type="text"
                placeholder="200100001-200"
                v-model="phone.extension"
              ></v-text-field>
              <v-text-field
                name="pass"
                label="Contraseña"
                type="text"
                placeholder="sUp3rp455"
                v-model="phone.pass"
              ></v-text-field>
              <v-text-field
                name="dominio"
                label="Dominio"
                type="text"
                placeholder="cpbxN.norvoz.es"
                v-model="phone.dominio"
              ></v-text-field>
              <v-checkbox name="activo" label="Activo" v-model="phone.activo"></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog_new = false">Cerrar</v-btn>
            <v-btn color="primary" type="submit" form="new-phone-form">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- edit dialog -->
    <v-layout>
      <v-dialog v-model="dialog_edit" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Editar terminal</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="editPhone(edit_phone)" id="edit-phone-form">
              <v-text-field
                name="modelo"
                label="Modelo"
                type="text"
                placeholder="snomD120"
                v-model="edit_phone.modelo"
              ></v-text-field>
              <v-text-field
                name="mac"
                label="MAC"
                type="text"
                placeholder="001122334455"
                v-model="edit_phone.mac"
              ></v-text-field>
              <v-text-field
                name="realname"
                label="Nombre"
                type="text"
                placeholder="Recepción <200>"
                v-model="edit_phone.realname"
              ></v-text-field>
              <v-text-field
                name="extension"
                label="Usuario"
                type="text"
                placeholder="200100001-200"
                v-model="edit_phone.extension"
              ></v-text-field>
              <v-text-field
                name="pass"
                label="Contraseña"
                type="text"
                placeholder="sUp3rp455"
                v-model="edit_phone.pass"
              ></v-text-field>
              <v-text-field
                name="dominio"
                label="Dominio"
                type="text"
                placeholder="cpbxN.norvoz.es"
                v-model="edit_phone.dominio"
              ></v-text-field>
              <v-checkbox name="activo" label="Activo" v-model="edit_phone.activo"></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog_edit = false">Cerrar</v-btn>
            <v-btn color="primary" type="submit" form="edit-phone-form">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-layout>   
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dialog_new: false,
    dialog_edit: false,    
    search: "",
    phone: {
      modelo: "",
      mac: "",
      realname: "",
      extension: "",
      pass: "",
      dominio: "",
      activo: true
    },
    edit_phone: {},
    editedIndex: -1,
    headers: [
      { text: "Modelo", align: "left", value: "modelo" },
      { text: "MAC", align: "right", value: "mac" },
      { text: "Extensión", align: "right", value: "extension" },
      { text: "Dominio", align: "right", value: "dominio" },
      { text: "", align: "center", value: "buttons" }
    ],
    phones: []
  }), 
  methods: {
    listPhones() {
      //Usar este método despois de agregar, actualizar e borrar un phone
      const getPhones = async () => {
        let config = {
          headers: {
            Accept: "application/json",
            Authorization: this.$store.getters.getToken
          }
        };
        try {
          return await axios.get(`${this.$apiURL}/provisioning/`, config);
        } catch {}
      };

      const processGetPhones = async () => {
        const get_result = await getPhones();

        if (get_result) {
          this.phones = get_result.data.data; 
        } else {
          console.log("Error listing phones!");
        }
      };

      processGetPhones();
    },
    insertPhone(phone) {
      let activo = "";
      if (phone.activo) {
        activo = "on";
      } else {
        activo = "off";
      }

      let newPhone = {
        modelo: phone.modelo,
        mac: phone.mac,
        extension: phone.extension,
        dominio: phone.dominio,
        valores: [
          {
            tag: "language",
            idx: "",
            perm: "",
            value: "Spanish"
          },
          {
            tag: "timezone",
            idx: "",
            perm: "",
            value: "GMT+1"
          },
          {
            tag: "user_active",
            idx: "1",
            perm: "RW",
            value: activo
          },
          {
            tag: "user_realname",
            idx: "1",
            perm: "RW",
            value: phone.realname
          },
          {
            tag: "user_name",
            idx: "1",
            perm: "RW",
            value: phone.extension
          },
          {
            tag: "user_host",
            idx: "1",
            perm: "R",
            value: phone.dominio
          },
          {
            tag: "user_pass",
            idx: "1",
            perm: "RW",
            value: phone.pass
          }
        ]
      };

      const goInsert = async () => {
        //-H 'Accept: application/json' -H "Authorization: ${TOKEN}"
        let config = {
          headers: {
            Accept: "application/json",
            Authorization: this.$store.getters.getToken
          }
        };
        try {
          return await axios.post(
            `${this.$apiURL}/provisioning/`,
            newPhone,
            config
          );
        } catch {}
      };

      const processInsertResult = async () => {
        const insert_result = await goInsert();

        if (insert_result) {
          if (insert_result.data.status == "success") {
            console.log("Success inserting new phone :D");
            this.$root.$toast("Inserción OK!", "success")
            this.$data.dialog_new = false;
            this.listPhones();
          } else {
            console.log("Error inserting new phone!");
            this.$root.$toast("Error insertando nuevo terminal.", "error")
          }
        } else {
          console.log("Error inserting new phone!");
          this.$root.$toast("Error insertando nuevo terminal.", "error")
        }
      };

      processInsertResult();
    },
    openEdit(this_phone) {      
      this.editedIndex = this.phones.indexOf(this_phone);
      Object.assign(this.edit_phone, this_phone);
      for (let valor in this_phone.valores) {
        if (this_phone.valores[valor].tag == "user_realname") {
          this.edit_phone.realname = this_phone.valores[valor].value;
        }

        if (this_phone.valores[valor].tag == "user_name") {
          this.edit_phone.extension = this_phone.valores[valor].value;
        }

        if (this_phone.valores[valor].tag == "user_pass") {
          this.edit_phone.pass = this_phone.valores[valor].value;
        }

        if (this_phone.valores[valor].tag == "user_host") {
          this.edit_phone.dominio = this_phone.valores[valor].value;
        }        
      }
      this.dialog_edit = true;
    },
    editPhone(this_phone) {
      let activo = "";
      if (this.edit_phone.activo) {
        activo = "on";
      } else {
        activo = "off";
      }

      let oldPhone = this.phones[this.editedIndex];
      Object.assign(oldPhone, this.edit_phone)

      for (let valor in oldPhone.valores) {
        if (oldPhone.valores[valor].tag == "user_realname") {
          oldPhone.valores[valor].value = this.edit_phone.realname;
        }

        if (oldPhone.valores[valor].tag == "user_name") {
          oldPhone.valores[valor].value = this.edit_phone.extension;
        }

        if (oldPhone.valores[valor].tag == "user_pass") {
          oldPhone.valores[valor].value = this.edit_phone.pass
        }

        if (oldPhone.valores[valor].tag == "user_host") {
          oldPhone.valores[valor].value = this.edit_phone.dominio
        }        
      }

      this.dialog_edit = false;

    },
    async deletePhone(this_phone) {
      if (
        await this.$root.$confirm("Borrar", "¿Estás seguro?", { color: "red" })
      ) {
        // yes
        console.log(true);

        const goDelete = async () => {
          //-H 'Accept: application/json' -H "Authorization: ${TOKEN}"
          let config = {
            headers: {
              Accept: "application/json",
              Authorization: this.$store.getters.getToken
            }
          };
          try {
            return await axios.delete(
              `${this.$apiURL}/provisioning/${this_phone.phone_id}`,
              config
            );
          } catch {}
        };

        const processDeleteResult = async () => {
          const delete_result = await goDelete();

          if (delete_result) {
            if (delete_result.data.status == "success") {
              console.log("Success deleting phone :D");
              this.$root.$toast("Borrado OK!", "success")
              this.listPhones();
            } else {
              console.log("Error deleting phone!");
              this.$root.$toast("Error borrando", "error");
            }
          } else {
            console.log("Error deleting phone!");
            this.$root.$toast("Error borrando", "error");
          }
        };

        processDeleteResult();
      }
    }
  },
  created() {
    console.log("get phones");
    this.listPhones();
    console.log(this.$apiURL);
  },
  watch: {
    phones: {
      handler: function(phones_list) {
        console.log("watch!");
        if (phones_list && this.editedIndex > -1) {
          // Update
          let updatedPhone = phones_list[this.editedIndex];

          const goUpdate = async () => {
            let config = {
              headers: {
                Accept: "application/json",
                Authorization: this.$store.getters.getToken
              }
            };
            try {
              return await axios.put(
                `${this.$apiURL}/provisioning/${updatedPhone.phone_id}`,
                updatedPhone,
                config
              );
            } catch {}
          };

          const processUpdateResult = async () => {
            const update_result = await goUpdate();

            if (update_result) {
              if (update_result.data.status == "success") {
                this.$root.$toast("Modificación OK!", "success")
                console.log("Success updating phone :D");            
              } else {
                this.$root.$toast("Error aplicando la modificación", "error");
                console.log("Error updating phone!");
              }
            } else {
              this.$root.$toast("Error aplicando la modificación", "error");
              console.log("Error updating phone!");
            }
          };

          processUpdateResult() 
        }
      },
      deep: true
    }      
  }  
};
</script>

<style>
</style>

