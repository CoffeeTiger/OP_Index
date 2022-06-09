<template>
  <div>
    <b-table :fields="fields" :items="items" caption-top hover responsive="sm" class="itable" empty-text="There are no records to show">
      <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">{{$t('page.list')}}</div>
          <div class="text-right imore" >{{$t('page.more')}} <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
      </template>

          <!-- A virtual column -->
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>

          <!-- A custom formatted column -->
          <template #cell(name)="data">
            <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
          </template>

          <!-- A virtual composite column -->
          <template #cell(nameage)="data">
            {{ data.item.name.first }} is {{ data.item.age }} years old
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell(age)="data">
            <div class="itable-cell-type2 itable-cell-type3">
              <div class="icell-up">
                <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
                <span class="itable-nikename">{{ data.item.name.first }}</span>
              </div>
              <div class="icell-down">{{ data.item.age }}</div>
            </div>
          </template>
        </b-table>
  </div>
</template>

<script>
   export default {
      data() {
        return {
          fields: [
            // A virtual column that doesn't exist in items
            'index',
            // A column that needs custom formatting
            { key: 'name', label: 'Full Name' },
            // A regular column
            'age',
            // A regular column
            'sex',
            // A virtual column made up from two fields
            { key: 'nameage', label: 'First name and age' }
          ],
          items: [
            { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
            { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
            { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
            { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
          ]
        }
      }
    }
</script>

<style>
  @import url("../../assets/scss/com.css");
</style>
