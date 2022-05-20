<script setup lang="ts">
import { ref } from 'vue'
import LeftBar from './LeftBar.vue'
import RightBar from './RightBar.vue'
import Main from './Main.vue'
const logoUrl = ref('src/assets/logo.png')

</script>

<template>
  <div class="common-layout">
    <el-row justify="center">
      <el-col :span="4">
        <el-affix :offset="0">
          <left-bar />
        </el-affix>
      </el-col>
      <el-col :span="12" class="main-body">
        <Main />
      </el-col>
      <el-col :span="4" class="main-body" style="margin: 0;">
        <el-affix :offset="0">
          <RightBar />
        </el-affix>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.common-layout{
  margin-top: 3em;
}

.main-body {
  background-color: var(--el-color-white);
  margin: 0 1.5em;
  border-radius: 10px;
  padding: 0 1.25em;
}
</style>