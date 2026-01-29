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

### What worked:
- The app behaved exactly as expected when adding and removing items.
- The interface was simple and easy to understand without explanation.
- The manual test steps were sufficient to catch obvious issues.

### What didn’t:
- Nothing significant for this initial version.

### Observations:
- The current approach works well for a small list but would likely need refinement as features are added.
- Removing items works fine now, but future features may require a more robust way to identify items.

---

## Decide

### Decisions locked in:
- Keep the simplest three-file structure: `index.html`, `style.css`, `app.js`
- Keep the app intentionally minimal: add/remove items only
- Keep state in-memory only (refresh clears the list)

### Explicitly deferred:
- Mark items complete/incomplete
- Local storage persistence
- Editing items
- Reordering / drag-and-drop
- Filtering/search

### Goal for Loop 002:
Add **local storage persistence** so the list survives a page refresh (no other feature changes).