<script setup>
import { Button, Hr, Html, Text } from '@vue-email/components'
</script>

<template>
  <Html lang="en">
    <Text>{{ $t('hello') }}</Text>
    <Hr />
    <Button href="https://example.com">Click me</Button>
  </Html>
</template>
