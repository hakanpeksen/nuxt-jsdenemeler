<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <div class="columns">
      <div class="column is-4">
        <div class="p-5">
          <div class="panel">
            <h4 class="has-text-centered">Başvuru Formu</h4>
            <form>
              <div class="field p-t-md">
                <label for="email">Kullanıcı Adı</label>
                <input
                  id="username"
                  type="text"
                  class="input"
                  :value="userData.username"
                  @input="userData.username = $event.target.value"
                />
              </div>
              <div class="field">
                <label for="password">Şifre</label>
                <input
                  id="password"
                  v-model.lazy.trim="userData.password"
                  type="password"
                  class="input"
                />
              </div>
              <div class="field">
                <label for="age">Yaş</label>
                <input
                  id="age"
                  v-model.number.trim="userData.age"
                  type="number"
                />
              </div>
              <div class="field">
                <label for="message">Açıklama</label><br />
                <textarea
                  id="message"
                  v-model="userData.message"
                  rows="3"
                  class="form-control"
                ></textarea>
              </div>
              <div class="field">
                <label>
                  <input
                    v-model="userData.interests"
                    type="checkbox"
                    value="yazilim"
                  />
                  Yazılım
                </label>
                <label>
                  <input
                    v-model="userData.interests"
                    type="checkbox"
                    value="donanim"
                  />
                  Donanım
                </label>
              </div>
              <div class="field">
                <label>
                  <input v-model="userData.gender" type="radio" value="erkek" />
                  Erkek
                </label>
                <label>
                  <input v-model="userData.gender" type="radio" value="kadin" />
                  Kadın
                </label>
              </div>
              <div class="field">
                <label>Şehir</label>
                <select v-model="userData.selectedCity" class="form-control">
                  <option
                    v-for="city in userData.cities"
                    :key="city"
                    :selected="city == 'Adana'"
                  >
                    {{ city }}
                  </option>
                </select>
              </div>
              <div>
                <app-switch v-model="switched"></app-switch>
              </div>
              <hr />
              <button class="button is-success" @click.prevent="submit">
                Gönder!
              </button>
            </form>
          </div>
        </div>
      </div>
      <div v-if="isSubmitted" class="column is-4">
        <div class="panel">
          <h4>Form Verileri</h4>
          <div class="field">
            <p>Kullanıcı Adı: {{ userData.username }}</p>
            <p>Şifre: {{ userData.password }}</p>
            <p>Yaş: {{ userData.age }}</p>
            <p style="white-space: pre">Açıklama: {{ userData.message }}</p>
            <p><strong>İlgi Alanları</strong></p>
            <ul>
              <li v-for="item in userData.interests" :key="item">{{ item }}</li>
            </ul>
            <p>Cinsiyet: {{ userData.gender }}</p>
            <p>Şehir: {{ userData.selectedCity }}</p>
            <p>Toggle: {{ switched }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from '@/components/Switch'
export default {
  components: {
    appSwitch: Switch,
  },
  data() {
    return {
      userData: {
        username: '',
        password: '',
        age: 30,
        message: '',
        interests: [],
        gender: '',
        cities: [
          'İstanbul',
          'Ankara',
          'Adana',
          'İzmir',
          'Bursa',
          'Konya',
          'Trabzon',
        ],
        selectedCity: '',
      },
      switched: true,
      isSubmitted: false,
    }
  },
  methods: {
    submit() {
      this.isSubmitted = true
    },
  },
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css');
</style>
