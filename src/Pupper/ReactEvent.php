<?php

namespace Pupper\Pupper;

class ReactEvent
{
    /** @var string $name */
    private $name;
    /** @var string $value */
    private $value;

    /**
     * @param string $body
     * @return ReactEvent
     */
    public static function parse(string $body): ReactEvent
    {
        $json = json_decode($body, true);
        return (new self)
            ->setName($json['name'])
            ->setValue($json['value']);
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return ReactEvent
     */
    public function setName(string $name): ReactEvent
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * @param string $value
     * @return ReactEvent
     */
    public function setValue(string $value): ReactEvent
    {
        $this->value = $value;
        return $this;
    }

    /**
     * @return string
     */
    public function build(): string
    {
        return json_encode([
            'event' => $this->name,
            'value' => $this->value
        ]);
    }
}
