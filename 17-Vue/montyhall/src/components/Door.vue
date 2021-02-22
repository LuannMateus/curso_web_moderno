<template>
  <div class="door-area">
    <div class="door-frame" :class="{selected: selected && !open}">
      <Gift v-if="open && hasGift"/>
    </div>
    <div class="door" :class="{ open }" 
        @click.stop="selected = !selected">
      <div class="number" :class="{selected: selected && !open}">{{ number }}</div>
      <div class="knob" 
        :class="{selected: selected && !open}"
        @click="open = true"></div>
    </div>
  </div>
</template>

<script>
import Gift from "./Gift.vue";

export default {
  components: { Gift },
  props: {
    number: { type: Number },
    hasGift: { type: Boolean },
  },
  data: function () {
    return {
        open: false,
        selected: false
    };
  },
};
</script>

<style>
:root {
    --dor-border: 5px solid brown;
    --selected-border: 5px solid yellow;
}

.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #aaa;
    margin-bottom: 20px;
    font-size: 3rem;

    display: flex;
    justify-content: center;

    margin: 10px;
}

.door-frame {
    position: absolute;
    height: 300px;
    width: 180px;

    border-left: var(--dor-border);
    border-top: var(--dor-border);
    border-right: var(--dor-border);

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.door-frame.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.door > .number.selected {
    color: yellow
}

.door .knob {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: brown;

    align-self: flex-start;

    margin-top: 60px;
}

.door .knob.selected {
    background-color: yellow;
}

.door.open {
    background-color: #0007;
}

.door.open .number,
.door.open .knob {
    display: none;
}







</style>