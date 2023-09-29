<script setup>
import { useI18n } from "vue-i18n";
import messages from "@/locales";
import nuxtStorage from "nuxt-storage";

const i18n = useI18n();
const appConfig = useAppConfig();

function loadStorageLocale() {
    let storageLocale = nuxtStorage.localStorage.getData(appConfig.language.key);
    if (storageLocale) {
       i18n.locale.value = storageLocale;
    }
}

function setStorageLocale(newLocale) {
    nuxtStorage.localStorage.setData(
        appConfig.language.key,
        newLocale.target.value,
        1440
    );
}

onMounted(() => {
    loadStorageLocale();
});
</script>

<template>
    <div class="uk-form-controls">
        <select v-model="$i18n.locale" @change="setStorageLocale($event)" class="uk-select uk-width-1-2"
            aria-label="language">
            <template v-for="(value, lang) in messages" v-bind:key="lang">
                <option :value="lang">
                    {{ $t("name", {}, { locale: lang }) }}
                </option>
            </template>
        </select>
    </div>
</template>
