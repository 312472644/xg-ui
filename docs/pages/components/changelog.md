# CHANGELOG

<Log :list="logList"/>

<script setup>
import { CHANGE_LOG_TYPE } from '../../utils/enum';

const logList = [{
  version: '1.0.0',
  date: '2021-09-01',
  content:[
    {
      type: CHANGE_LOG_TYPE.Features,
      list:[
        'First version released',
        'First version released'
      ]
    },{
      type: CHANGE_LOG_TYPE.BugFixes,
      list:[
        'Fixed a bug'
      ]
    }
  ]
},{
  version: '1.0.0',
  date: '2021-09-01',
  content:[
    {
      type: CHANGE_LOG_TYPE.Features,
      list:[
        'First version released'
      ]
    },{
      type: CHANGE_LOG_TYPE.BugFixes,
      list:[
        'Fixed a bug'
      ]
    }
  ]
}]
</script>
