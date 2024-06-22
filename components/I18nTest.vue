<script setup>
import { Button, Hr, Html, Text } from '@vue-email/components'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <Html lang="en">
    <Text>{{ t('hello') }}</Text>
    <Hr />
    <Button href="https://example.com">Click me</Button>
  </Html>
</template>
