Working With Forms
=========================
 - Controlled Components
 - Special cases
   - textarea
   `<textarea>This is the description.</textarea> -> <textarea value="This is a description." />` 
   - select NO selected attribute on option use value instead ->
```
   <select value="B">
        <option value="A">Mobile</option>
        <option value="B">Work</option>
        <option value="C">Home</option>
    </select>
```
 - Uncontrolled Components
   - antipattern
 - Kanban App: Creating a Task Form