import Select from "react-select";

export default function TagSelect({ options, value, onChange }) {
    const formattedOptions = options.map((tag) => ({
        value: tag.id,
        label: tag.name,
    }));

    const selectedOptions = formattedOptions.filter((tag) =>
        value.includes(tag.value),
    );

    const customStyles = {
        control: (base, state) => ({
            ...base,
            boxShadow: "none",
            borderColor: state.isFocused ? "#d1d5db" : base.borderColor,
            "&:hover": {
                borderColor: "#d1d5db",
            },
        }),
    };

    return (
        <Select
            isMulti
            name="tags"
            options={formattedOptions}
            value={selectedOptions}
            onChange={(selected) => onChange(selected.map((tag) => tag.value))}
            classNamePrefix="select"
            styles={customStyles} // ⬅️ Apply custom style override
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary25: "#fff7ed",
                },
            })}
            className="border-2 border-black text-black"
        />
    );
}
