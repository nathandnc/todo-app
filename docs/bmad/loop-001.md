# BMAD Loop 001 — To-Do App

## Goal (1 sentence)
Build the smallest working to-do list UI with add/remove in memory only.

## Build

### Planned changes:
1. Create `src/index.html` — single HTML page with:
   - Text input for new to-do item
   - "Add" button
   - Unordered list to display items
   - Each item has a "Remove" button

2. Create `src/style.css` — minimal styling:
   - Basic layout (centered container)
   - Visible input and button styling
   - List item styling with remove button

3. Create `src/app.js` — in-memory logic:
   - Array to hold to-do items
   - `addItem()` function: reads input, adds to array, re-renders list
   - `removeItem(index)` function: removes from array by index, re-renders list
   - `renderList()` function: clears and rebuilds the DOM list from array

### Files to touch:
- `src/index.html` (new)
- `src/style.css` (new)
- `src/app.js` (new)

### Constraints:
- No frameworks (vanilla HTML/CSS/JS only)
- No build tools (no npm, no bundlers)
- No persistence (refresh clears all items)
- No editing of existing items (add/remove only)
- No drag-and-drop or reordering

---

## Measure

### Manual verification steps:

1. **Open the app**
   - Open `src/index.html` in a browser (file:// or local server)
   - Expected: Empty list, visible input field and "Add" button

2. **Add first item**
   - Type "Buy milk" in the input field
   - Click "Add" button
   - Expected: "Buy milk" appears in list with a "Remove" button

3. **Add second item**
   - Type "Walk the dog" in input field
   - Click "Add" button
   - Expected: Two items visible in order: "Buy milk", "Walk the dog"

4. **Add empty item (edge case)**
   - Leave input field empty
   - Click "Add" button
   - Expected: Nothing added (empty items should be ignored)

5. **Remove middle item**
   - Add a third item "Read a book"
   - Click "Remove" on "Walk the dog"
   - Expected: List shows "Buy milk" and "Read a book" only

6. **Remove all items**
   - Click "Remove" on each remaining item
   - Expected: Empty list, no errors in console

7. **Refresh clears state**
   - Add items, then refresh the browser
   - Expected: List is empty (no persistence)

### Expected behavior:
- Input clears after adding an item
- Items appear in insertion order
- Remove buttons work immediately
- No console errors during normal use

---

## Analyze

_To be completed after implementation._

- What worked:
- What didn't:
- Unexpected issues:

---

## Decide

### Decisions locked in:
- Three-file structure: index.html, style.css, app.js
- Array-based in-memory storage
- Index-based removal
- No persistence until explicitly requested

### Explicitly deferred:
- Edit existing items
- Mark items complete/incomplete
- Local storage persistence
- Drag-and-drop reordering
- Filtering/search

### Goal for Loop 002:
_To be determined based on Analyze results — likely add "mark complete" toggle or local storage persistence._
