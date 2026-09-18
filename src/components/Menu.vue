<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
</script>

<template>
  <Card>
    <CardContent class="flex flex-row justify-between items-center">
      <span>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink as-child>
                <a href="#">File</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </span>
      <span class="font-black">Search Algorithms</span>
    </CardContent>
  </Card>
</template>

<style scoped></style>
