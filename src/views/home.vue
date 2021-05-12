<template>
    <div class="home-area">
        home
        <el-button type="primary" @click="$store.commit('increment')">{{
            $store.state.count
        }}</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
});
</script>

<style lang="less">
@bg: #f0f0f0;
.home-area {
    background: @bg;
}
</style>
