// import { useEffect, useState } from "react";
// import "./AddAddressModal.css";

// const emptyForm = {
//   name: "",
//   area: "",
//   city: "",
//   pincode: "",
//   type: "Home",
// };

// const AddAddressModal = ({ onClose, onSelect }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [selectedId, setSelectedId] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState(emptyForm);

//   /* LOAD ADDRESSES */
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("addresses")) || [];
//     setAddresses(saved);
//   }, []);

//   /* SAVE ADDRESS */
//   const saveAddress = () => {
//     if (!form.name || !form.area || !form.city || !form.pincode) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newAddr = { id: Date.now(), ...form };
//     const updated = [...addresses, newAddr];

//     setAddresses(updated);
//     localStorage.setItem("addresses", JSON.stringify(updated));

//     setShowForm(false);
//     setForm(emptyForm);
//   };

//   /* DELETE ADDRESS */
//   const deleteAddress = (id) => {
//     const updated = addresses.filter((a) => a.id !== id);
//     setAddresses(updated);
//     localStorage.setItem("addresses", JSON.stringify(updated));
//   };

//   return (
//     <div className="address-overlay">
//       <div className="address-modal">

//         {/* HEADER */}
//         <div className="modal-head">
//           <h3>Select address</h3>
//           <button onClick={onClose}>×</button>
//         </div>

//         {/* ADD NEW */}
//         {!showForm && (
//           <button
//             className="add-new"
//             onClick={() => setShowForm(true)}
//           >
//             + Add new address
//           </button>
//         )}

//         {/* ADDRESS LIST */}
//         {!showForm && (
//           <div className="address-list">
//             {addresses.map((a) => (
//               <label key={a.id} className="address-row">
//                 <input
//                   type="radio"
//                   checked={selectedId === a.id}
//                   onChange={() => setSelectedId(a.id)}
//                 />

//                 <div className="addr-info">
//                   <div className="addr-top">
//                     <b>{a.name}</b>
//                     <span className="tag">{a.type}</span>
//                   </div>

//                   <p>
//                     {a.area}, {a.city} – {a.pincode}
//                   </p>

//                   <div className="addr-actions">
//                     <span
//                       className="delete"
//                       onClick={() => deleteAddress(a.id)}
//                     >
//                       DELETE
//                     </span>
//                   </div>
//                 </div>
//               </label>
//             ))}
//           </div>
//         )}

//         {/* ADD FORM */}
//         {showForm && (
//           <div className="addr-form">
//             <input
//               placeholder="Full Name"
//               value={form.name}
//               onChange={(e) =>
//                 setForm({ ...form, name: e.target.value })
//               }
//             />

//             <input
//               placeholder="Area / Street"
//               value={form.area}
//               onChange={(e) =>
//                 setForm({ ...form, area: e.target.value })
//               }
//             />

//             <input
//               placeholder="City"
//               value={form.city}
//               onChange={(e) =>
//                 setForm({ ...form, city: e.target.value })
//               }
//             />

//             <input
//               placeholder="Pincode"
//               value={form.pincode}
//               onChange={(e) =>
//                 setForm({ ...form, pincode: e.target.value })
//               }
//             />

//             <div className="type-row">
//               <button
//                 className={form.type === "Home" ? "active" : ""}
//                 onClick={() => setForm({ ...form, type: "Home" })}
//               >
//                 Home
//               </button>

//               <button
//                 className={form.type === "Work" ? "active" : ""}
//                 onClick={() => setForm({ ...form, type: "Work" })}
//               >
//                 Work
//               </button>
//             </div>

//             <button className="save-btn" onClick={saveAddress}>
//               SAVE ADDRESS
//             </button>
//           </div>
//         )}

//         {/* DELIVER */}
//         {!showForm && (
//           <button
//             className="deliver-btn"
//             onClick={() => {
//               const addr = addresses.find(
//                 (a) => a.id === selectedId
//               );
//               if (!addr) return alert("Select address");
//               onSelect(addr);
//             }}
//           >
//             DELIVER HERE
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddAddressModal;


























// import { useEffect, useState } from "react";
// import "./AddAddressModal.css";

// const AddAddressModal = ({ onClose, onSelect, onDelete }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
    
//     area: "",
//     city: "",
//     pincode: "",
//   });

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("addresses")) || [];
//     setAddresses(saved);
//   }, []);

//   const saveNew = () => {
//     if (!form.name || !form.city) return;

//     const newAddr = { ...form, id: Date.now() };
//     const updated = [...addresses, newAddr];

//     localStorage.setItem("addresses", JSON.stringify(updated));
//     localStorage.setItem("selectedAddress", JSON.stringify(newAddr));

//     onSelect(newAddr);
//   };

//   // ✅ DELETE ADDRESS
//   const deleteAddress = (id) => {
//     const updated = addresses.filter(a => a.id !== id);
//     setAddresses(updated);
//     localStorage.setItem("addresses", JSON.stringify(updated));

//     const selected = JSON.parse(localStorage.getItem("selectedAddress"));
//     if (selected?.id === id) {
//       localStorage.removeItem("selectedAddress");
//       onDelete(id); // 🔥 Cart page notify
//     }
//   };

//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         <h3>Select Address</h3>

//         {addresses.map(addr => (
//           <div key={addr.id} className="address-card">
//             <p onClick={() => onSelect(addr)}>
//               <b>{addr.name}</b>, {addr.area}, {addr.city} – {addr.pincode}
//             </p>

//             {/* ❌ DELETE BUTTON */}
//             <button
//               className="delete-btn"
//               onClick={() => deleteAddress(addr.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}

//         <h4>Add New Address</h4>

//         <input placeholder="Name"
//           onChange={(e) => setForm({ ...form, name: e.target.value })} />
//         <input placeholder="Area"
//           onChange={(e) => setForm({ ...form, area: e.target.value })} />
//         <input placeholder="City"
//           onChange={(e) => setForm({ ...form, city: e.target.value })} />
//         <input placeholder="Pincode"
//           onChange={(e) => setForm({ ...form, pincode: e.target.value })} />

//         <div className="actions">
//           <button onClick={saveNew}>Deliver Here</button>
//           <button className="cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAddressModal;




import { useEffect, useState } from "react";
import "./AddAddressModal.css";

const AddAddressModal = ({ onClose, onSelect, onDelete }) => {
  const [addresses, setAddresses] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    area: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(saved);
  }, []);

  // ✅ SAVE / UPDATE
  const saveAddress = () => {
    if (!form.name || !form.mobile || !form.city) return;

    let updated;

    if (editingId) {
      updated = addresses.map((a) =>
        a.id === editingId ? { ...form, id: editingId } : a
      );
    } else {
      updated = [...addresses, { ...form, id: Date.now() }];
    }

    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
    localStorage.setItem("selectedAddress", JSON.stringify(form));

    onSelect(form);
    resetForm();
  };

  // ✅ EDIT
  const editAddress = (addr) => {
    setForm(addr);
    setEditingId(addr.id);
  };

  // ✅ DELETE
  const deleteAddress = (id) => {
    const updated = addresses.filter((a) => a.id !== id);
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));

    const selected = JSON.parse(localStorage.getItem("selectedAddress"));
    if (selected?.id === id) {
      localStorage.removeItem("selectedAddress");
      onDelete(id);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      mobile: "",
      area: "",
      city: "",
      pincode: "",
    });
    setEditingId(null);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">

        <h3>Select Address</h3>

        {addresses.map((addr) => (
          <div key={addr.id} className="address-card">
            <p onClick={() => onSelect(addr)}>
              <b>{addr.name}</b> ({addr.mobile})<br />
              {addr.area}, {addr.city} – {addr.pincode}
            </p>

            <div className="addr-actions">
              <button onClick={() => editAddress(addr)}>Edit</button>
              <button className="delete" onClick={() => deleteAddress(addr.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}

        <h4>{editingId ? "Edit Address" : "Add New Address"}</h4>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          maxLength="10"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />

        <input
          placeholder="Area"
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value })}
        />

        <input
          placeholder="City"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />

        <input
          placeholder="Pincode"
          value={form.pincode}
          onChange={(e) => setForm({ ...form, pincode: e.target.value })}
        />

        <div className="actions">
          <button onClick={saveAddress}>
            {editingId ? "Update" : "Deliver Here"}
          </button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>

      </div>
    </div>
  );
};

export default AddAddressModal;
